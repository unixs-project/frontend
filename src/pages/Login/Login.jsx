import { LoginForm } from "../../views/LoginForm/index.jsx";
import { Cover } from "../../components/Cover/index.jsx";
import styles from './styles.module.css'

export function Login() {
  return (
    <section className={styles.loginContainer}>
      <Cover />
      <LoginForm />
    </section>
  )
}