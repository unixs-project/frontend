import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, TextField } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import styles from './styles.module.css'
import { createUser } from '../../services/api';

export function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const navigate = useNavigate()

  const emailRegex = /^[A-Z0-9._%+-]+@edu\.unisinos\.br$/i
  const passwordRegex = /^(?=.*[A-Z]).{6,}$/
  
  const isEmailValid = email !== '' && !emailRegex.test(email)
  const isPasswordValid = password !== '' && !passwordRegex.test(password)

  const handleRedirectToLogin = () => {
    navigate('/')
  }

  const handleRegisterUser = async (e) => {
    e.preventDefault()
    const newUser = {
      name,
      email,
      password,
      passwordConfirmation
    }

    await createUser(newUser)
  }

  return (
    <div className={styles.registerFormContainer}>
      <ArrowBackOutlinedIcon onClick={handleRedirectToLogin} style={{cursor: 'pointer'}}/>
      <h1 className={styles.title}>Cadastro</h1>
      <p className={styles.subtitle}>Preencha os campos abaixo com as informações solicitadas.</p>
      <form action='' className={styles.form} onSubmit={handleRegisterUser}>
        <TextField
          label="Nome"
          type="text"
          autoComplete="current-email"
          variant="standard"
          margin='dense'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="standard"
          margin='dense'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          error={isPasswordValid}
          helperText={isPasswordValid ? 'senha inválida' : ''}
        />
        <TextField
          label="Repita a senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
          margin='dense'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button variant='contained' style={{backgroundColor: '#21409A', marginTop: '24px'}} type='submit'>
          Solicitar cadastro
        </Button>
      </form>
    </div>
  )
}