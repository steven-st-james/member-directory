'use client'
import React from 'react'
import Image from "next/image";
import styles from './card.module.css'
import { CardType } from '../_types/card.types';
import { useRouter } from 'next/navigation'

export default function Card(profile: CardType) {
    const router = useRouter()

    return (
        <>
            <div className={styles.card} onClick={() => {
                router.push(`/${profile.id}`)
            }}>
                <div className={styles.container}>
                    <Image src={profile.img} alt="Card Image" height={75} width={75} />
                    <h4><b>{profile.first} {profile.last}</b></h4>
                    <p>Age:{profile.age} </p>

                </div>
            </div>
        </>
    )
}
