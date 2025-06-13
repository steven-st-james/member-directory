'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchMember, updateMember } from '@/services/memberService'
import { useState } from 'react'

export default function MemberDetails({ memberId }: { memberId: string }) {
  const queryClient = useQueryClient()
  const [isEditing, setIsEditing] = useState(false)
  
  // Query: Fetch member data
  const { data: member, isLoading, error } = useQuery({
    queryKey: ['member', memberId],
    queryFn: () => fetchMember(memberId),
  })
  
  // Mutation: Update member data
  const updateMemberMutation = useMutation({
    mutationFn: (updatedData: any) => updateMember(memberId, updatedData),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['member', memberId] })
      setIsEditing(false)
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {(error as Error).message}</div>
  if (!member) return <div>Member not found</div>

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-xl font-bold mb-4">Member Details</h1>
      
      {isEditing ? (
        <form onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          updateMemberMutation.mutate({
            name: formData.get('name'),
            email: formData.get('email'),
            role: formData.get('role'),
          })
        }}>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input 
              name="name" 
              defaultValue={member.name} 
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input 
              name="email" 
              defaultValue={member.email} 
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Role:</label>
            <input 
              name="role" 
              defaultValue={member.role} 
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="flex gap-2">
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 text-white rounded"
              disabled={updateMemberMutation.isPending}
            >
              {updateMemberMutation.isPending ? 'Saving...' : 'Save'}
            </button>
            <button 
              type="button" 
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="mb-2"><strong>Name:</strong> {member.name}</div>
          <div className="mb-2"><strong>Email:</strong> {member.email}</div>
          <div className="mb-4"><strong>Role:</strong> {member.role}</div>
          
          <button 
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  )
}