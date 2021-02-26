import Head from "next/head";
import CompleteChallenge from "../components/CompleteChallenge";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile />
          <CompleteChallenge />
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
