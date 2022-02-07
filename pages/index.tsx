import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sklep Młyn</title>
        <meta name="description" content="sklep młyn i produkcja mąki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
