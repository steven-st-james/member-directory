'use client'

import React, { useState } from 'react'
import Card from './card';
import { CardType } from "../_types/card.types";
import type { Member } from '../../generated/prisma/client'
import Search from './search';

export type DataPayload = {
    results: Member[]
}

export default function MemberView({ members }: { members: Member[] }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMembers = members.filter(member => {
        const fullName = `${member.first} ${member.last}`.toLowerCase();
        return fullName.includes(searchQuery.toLowerCase());
    });

    if (!members) return <div>Loading....</div>
    return (
        <>
            <div>
                <div><Search onSearch={setSearchQuery} /></div>
                <div>
                    {filteredMembers.map((member: Member) => {
                        const card: CardType = {
                            first: member.first,
                            last: member.last,
                            age: member.age,
                            img: member.thumbImg,
                            id: member.id
                        }
                        return <Card {...card} key={member.id} />
                    })}
                </div>
            </div>
        </>
    )
}
