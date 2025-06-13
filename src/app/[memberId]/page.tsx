import React from 'react'
import MemberDetails from '@/components/MemberDetails'

export default function Member({ params }: { params: { memberId: string } }) {
  const { memberId } = params
  
  return (
    <div className="container mx-auto py-8">
      <MemberDetails memberId={memberId} />
    </div>
  )
}