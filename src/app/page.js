import Image from "next/image";
import styles from "./page.module.css";
import ButtonComponent from "./component/ButtonComponent";

export default function Home() {
  return (
   <div>
     <h1>Home Page</h1>
     <ButtonComponent />
   </div>
  );
}
