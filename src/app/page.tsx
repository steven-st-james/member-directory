import Image from "next/image";
import styles from "./page.module.css";
import { fetchData } from "./_services/fetch-data";
import MemberView from './_components/memberview'
import { seedMembers } from './_services/seed-members'

export default async function Home() {
  await seedMembers();
  const data = await fetchData();
  const { results } = data;
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
