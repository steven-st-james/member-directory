import React from 'react'
import { prisma } from '../_lib/prisma'
import Image from "next/image";
import styles from './page.module.css'
import { formatDate } from '../_utils/dateFormatter';
export default async function Member({params}: {params: {memberId: string}}) {
    const {memberId} = await params;
    const member = await prisma.member.findUnique({
      where: {id: memberId}
    })
    if(!member) return <div>Loading....</div>
  return (
   
    <div className={styles.profilecontainer}>
        <div className="profile-header">
            <Image src={member.largeImg} alt="Profile Picture" className={styles.profilepic} width={200} height={200}></Image>
            <h1>{member.first} {member.last}</h1>
        </div>

        <div className={styles.profiledetails}>
            <h2>Contact Information</h2>
            <p><strong>Address:</strong> {member.street} {member.city}, {member.state} {member.postalCode}</p>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Date of Birth:</strong> {formatDate(new Date(member.dob))}</p>
            <p><strong>Phone:</strong> {member.phoneNumber}</p>
        </div>
    </div>
  )
}
