import Head from 'next/head';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          Teste
          <span>Sub title</span>
        </h1>
      </div>
    </>
  )
}