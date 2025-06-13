import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetch('https://randomuser.me/api/?results=5');
  const json = await data.json();
  console.log(json)
  if(!json) return null;
  return (
    <>
      <div className="page">
        <div className="maing">
          {json.results.map(r => {
       
              return <div key={r.cell}>
                <p >{r.name.first} { r.name.last}</p>
                <Image src={r.picture.thumbnail} width={100} height={100} alt="image"/>

               </div>
          
          })}
        </div>
      </div>
    </>
  )
}
