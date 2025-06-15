'use client'
import React from 'react'
import Image from "next/image";
import styles from './card.module.css'
import { CardType } from '../_types/card.types';
import getMemberIdAction  from '../_services/actions'
export default function Card(profile: CardType) {
    const handleClick = async () => {
        // console.log("ID")
         await getMemberIdAction(profile.id)
    }
    return (
        <>
            <div className={styles.card}>
              
                    <div className={styles.container}  onClick={handleClick}>
                          <Image src={profile.img} alt="Card Image" height={75} width={75} />
                        <h4><b>{profile.first} {profile.last}</b></h4>
                        <p>Age:{profile.age} </p>
                      
                    </div>
            </div>
        </>
    )
}
