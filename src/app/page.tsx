'use server'
import Image from "next/image";
import styles from "./page.module.css";
import { PayloadType } from "./_types/payload.type";
import { formatDate } from "./_utils/dateFormatter";
import { fetchData } from "./_services/fetch-data";
import  MemberView  from './_components/memberview'
export default async function Home() {

  const data = await fetchData();
  const { results } = data;
  const handleClick = (id: string) => {
    console.log('Click', id)
  }
  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <MemberView members={results}/>
        </div>
      </div>
    </>
  )
}
