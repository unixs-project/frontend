import { Button, TextField } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styles from './styles.module.css'

export function RegisterForm() {
  return (
    <div className={styles.registerFormContainer}>
      <ArrowBackOutlinedIcon />
      <h1 className={styles.title}>Cadastro</h1>
      <p className={styles.subtitle}>Preencha os campos abaixo com as informações solicitadas.</p>
      <form action='' className={styles.form}>
        <TextField
          label="Nome"
          type="email"
          autoComplete="current-email"
          variant="standard"
          margin='dense'
        />
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
        <TextField
          label="Repita a senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
          margin='dense'
        />
        <Button variant='contained' style={{backgroundColor: '#21409A', marginTop: '24px'}}>
          Solicitar cadastro
        </Button>
      </form>
    </div>
  )
}