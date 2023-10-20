import { Button, TextField } from '@mui/material'
import styles from './styles.module.css'

export function LoginForm() {
  return (
    <div className={styles.loginFormContainer}>
      <h1 className={styles.title}>Bem vindo!</h1>
      <p className={styles.text}>Ficamos felizes em ajudar.</p>
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
        <a className={styles.link}>
          Esqueceu sua senha?
        </a>
        <Button variant='contained' className={styles['MuiButton-contained']}>
          Entrar
        </Button>
      </form>
    </div>
  )
}
