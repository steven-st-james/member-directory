'use client'
import React from 'react'
import Image from "next/image";
import styles from './card.module.css'
import { CardType } from '../_types/card.types';
export default function Card(profile: CardType) {

    return (
        <>
            <div className={styles.card}>
                    <div className={styles.container}>
                          <Image src={profile.img} alt="Card Image" height={75} width={75} />
                        <h4><b>{profile.first} {profile.last}</b></h4>
                        <p>Age:{profile.age} </p>
                      
                    </div>
            </div>
        </>
    )
}
