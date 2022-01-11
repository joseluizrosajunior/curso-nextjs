import Head from 'next/head';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src='/images/board-user.svg' alt='Ferramenta board' />
        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escrevam planeje e organizese...</h1>
          <p>
            <span>100% Gratuíta</span> e online
          </p>
        </section>
        <div className={styles.donaters}>
          <img src='https://sujeitoprogramador.com/steve.png' alt='Usuário 1' />
        </div>
      </main>
    </>
  )
}
