import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Header from "./components/header";
import Cover from "./components/cover";
import Products from "./components/products";
import About from "./components/about";
import Contacts from "./components/contacts";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Óticas Vida</title>
        <meta name="description" content="Site oficial Óticas Vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Cover/>
      <Products/>
      <About/>
      <Contacts/>
    </div>
  );
}
