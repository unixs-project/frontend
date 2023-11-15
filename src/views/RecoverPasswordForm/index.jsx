import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import styles from './styles.module.css'

export function RecoverPasswordForm() {
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const passwordRegex = /^(?=.*[A-Z]).{6,}$/
  const isPasswordValid = password !== '' && !passwordRegex.test(password)

  const handlePasswordValidation = (password) => {
    setPassword(password)
  }

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
          value={password}
          onChange={(e) => handlePasswordValidation(e.target.value)}
          error={isPasswordValid}
          helperText={isPasswordValid ? 'senha inválida' : ''}
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