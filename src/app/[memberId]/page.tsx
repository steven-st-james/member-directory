import React from 'react'

export default async function Member({params}: {params: {memberId: string}}) {
    const {memberId} = await params;
  return (
    <div>Hi I'm. a Member {memberId}</div>
  )
}
