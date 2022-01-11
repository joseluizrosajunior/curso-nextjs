import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

export function SignInButton() {

    const session = true;

    return session ? (
        <button
            type='button'
            className={styles.signInButton}
            onClick={ ()=> {} }
        >
            <img src='https://sujeitoprogramador.com/steve.png' alt='Foto do usuário' />
            Olá José Luiz
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type='button'
            className={styles.signInButton}
            onClick={ ()=> {} }
        >
            <FaGithub color='#ffb800' />
            Entrar com github
        </button>
    )
}