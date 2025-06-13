// Mock data for demonstration purposes
const mockMembers = {
  '1': { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  '2': { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  '3': { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
};

export async function fetchMember(memberId: string) {
  // In a real app, this would be an API call
  // return fetch(`/api/members/${memberId}`).then(res => res.json())
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data or 404
  if (mockMembers[memberId]) {
    return mockMembers[memberId];
  }
  throw new Error('Member not found');
}

export async function updateMember(memberId: string, data: any) {
  // In a real app, this would be an API call
  // return fetch(`/api/members/${memberId}`, {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // }).then(res => res.json())
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Update mock data
  if (mockMembers[memberId]) {
    mockMembers[memberId] = { ...mockMembers[memberId], ...data };
    return mockMembers[memberId];
  }
  throw new Error('Member not found');
}