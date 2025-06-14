import Image from "next/image";
import styles from "./page.module.css";
import Card from './_components/card';
import { CardType } from "./_types/card.types";
import { PayloadType } from "./_types/payload.type";
import { formatDate } from "./_utils/dateFormatter";
import { fetchData } from "./_services/fetch-data";
export default async function Home() {

  const data = await fetchData();
  const { results } = data;

  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>

          {results.map((r: PayloadType) => {
            const card: CardType = { first: r.name.first, last: r.name.last, age: r.dob.age, img: r.picture.thumbnail, dob: formatDate(new Date(r.dob.date)), email: r.email, phone: r.phone }
            return <Card {...card} key={r.cell} />
          })}
        </div>
      </div>
    </>
  )
}
