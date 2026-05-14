import styles from './styles.module.css'
export function Footer()
{
    return <footer className={styles.footer}>
        <a href="">Entende como funciona a técnica de pomodoro</a>
        <a href="">Chronoso Pomodoro &copy; {new Date().getFullYear()} - Feito com carinho!</a>
    </footer>
}