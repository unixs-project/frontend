import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import styles from './styles.module.css'

export function RecoverPasswordForm() {
  const navigate = useNavigate()

  const handleRedirectToLogin = () => {
    navigate('/')
  }

  return (
    <div className={styles.resetPasswordFormContainer}>      
      <ArrowBackOutlinedIcon onClick={handleRedirectToLogin} style={{cursor: 'pointer'}}/>
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
    </div>
  )
}