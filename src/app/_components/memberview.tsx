import React from 'react'
import { PayloadType } from '../_types/payload.type'
import Card from './card';
import { CardType } from "../_types/card.types";
export type DataPayload = {
    results: PayloadType[]
}
export default async function MemberView({members}: {members: PayloadType[]}) {

    if(!members) return <div>Loading....</div>
    return (
        <>

            {members.map((r: PayloadType) => {
                const card: CardType = { first: r.name.first, last: r.name.last, age: r.dob.age, img: r.picture.thumbnail, id: r.id.value}
                return <Card {...card} key={r.cell}/>
            })}
        </>
    )
}
