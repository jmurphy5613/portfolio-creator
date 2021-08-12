import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Narbar";

const Home = () => (
  <div className={styles.container}>
    <Navbar />
    <Head>
    </Head>
  </div>
);

export default Home;
