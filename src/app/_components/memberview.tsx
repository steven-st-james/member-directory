import React from 'react'
import Card from './card';
import { CardType } from "../_types/card.types";
import type { Member } from '../../generated/prisma/client'

export type DataPayload = {
    results: Member[]
}

export default async function MemberView({members}: {members: Member[]}) {
    if(!members) return <div>Loading....</div>
    return (
        <>
            {members.map((member: Member) => {
                const card: CardType = { 
                    first: member.first, 
                    last: member.last, 
                    age: member.age, 
                    img: member.thumbImg, 
                    id: member.id
                }
                return <Card {...card} key={member.id}/>
            })}
        </>
    )
}
