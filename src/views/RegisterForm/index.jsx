import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, TextField } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import styles from './styles.module.css'

export function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const emailRegex = /^[A-Z0-9._%+-]+@edu\.unisinos\.br$/i
  const passwordRegex = /^(?=.*[A-Z]).{6,}$/
  
  const isEmailValid = email !== '' && !emailRegex.test(email)
  const isPasswordValid = password !== '' && !passwordRegex.test(password)

  const handleEmailValidation = (email) => {
    setEmail(email)
  }

  const handlePasswordValidation = (password) => {
    setPassword(password)
  }


  const handleRedirectToLogin = () => {
    navigate('/')
  }

  return (
    <div className={styles.registerFormContainer}>
      <ArrowBackOutlinedIcon onClick={handleRedirectToLogin} style={{cursor: 'pointer'}}/>
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
          value={email}
          onChange={(e) => handleEmailValidation(e.target.value)}
          error={isEmailValid}
          helperText={isEmailValid ? 'email inválido' : ''}
        />
        <TextField
          label="Senha"
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
        <Button variant='contained' style={{backgroundColor: '#21409A', marginTop: '24px'}}>
          Solicitar cadastro
        </Button>
      </form>
    </div>
  )
}