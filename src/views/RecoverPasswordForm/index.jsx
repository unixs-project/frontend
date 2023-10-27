import { Button, TextField } from "@mui/material";
import styles from './styles.module.css'

export function RecoverPasswordForm() {
  return (
    <div className={styles.resetPasswordFormContainer}>
      <h1 className={styles.title}>Alterar senha</h1>
      <p className={styles.subtitle}>A sua senha deve conter pelo menos uma letra maiúscula e no mínimo 5 caracteres.</p>
      <form className={styles.form}>
        <TextField
          label="Nova senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
          margin='dense'
        />
        <TextField
          label="Repita a senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
          margin='dense'
        />
        <Button variant='contained' style={{margin: '24px 0 8px', backgroundColor: '#21409A'}}>
          Cadastrar nova senha
        </Button>
      </form>
      <Button href='/' variant='outlined' style={{border: '1px solid #21409A', color: '#21409A'}}>
        Retornar ao login
      </Button>
    </div>
  )
}