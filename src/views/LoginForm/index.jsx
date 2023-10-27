import { Button, TextField } from '@mui/material'
import styles from './styles.module.css'

export function LoginForm() {
  return (
    <div className={styles.loginFormContainer}>
      <h1 className={styles.title}>Bem vindo!</h1>
      <p className={styles.subtitle}>Ficamos felizes em ajudar.</p>
      <form action='' className={styles.form}>
        <TextField
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="standard"
          margin='dense'
        />
        <TextField
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
          margin='dense'
        />
        <a href='/recover-password' className={styles.link}>
          Esqueceu sua senha?
        </a>
        <Button href='/home' variant='contained' style={{backgroundColor: '#21409A', marginBottom: '24px'}}>
          Entrar
        </Button>
      </form>
      <a href="/register" className={styles.text}>
        Ainda não possui uma conta? <span className={styles.highlightedText}>Cadastre-se aqui.</span>
      </a>
    </div>
  )
}
