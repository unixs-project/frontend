import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/api'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const emailRegex = /^[A-Z0-9._%+-]+@edu\.unisinos\.br$/i
  const passwordRegex = /^(?=.*[A-Z]).{6,}$/
  
  const isEmailValid = email !== '' && emailRegex.test(email)
  const isPasswordValid = password !== '' && passwordRegex.test(password)

  const handleFormSubmit = async(e) => {
    e.preventDefault()

    const userLoginData = {
      email,
      password
    }
    
    if (!isEmailValid || !isPasswordValid) {
      return alert('email ou senha inválidos')
    }

    await login(userLoginData)

    return navigate('/home')
  }

  return (
    <div className={styles.loginFormContainer}>
      <h1 className={styles.title}>Bem vindo!</h1>
      <p className={styles.subtitle}>Ficamos felizes em ajudar.</p>
      <form action='' className={styles.form} onSubmit={handleFormSubmit}>
        <TextField
          label='Email'
          type='email'
          autoComplete='current-email'
          variant='standard'
          margin='dense'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!isEmailValid && email !== ''}
          helperText={!isEmailValid && email !== '' ? 'email inválido' : ''}
        />
        <TextField
          label='Senha'
          type='password'
          autoComplete='current-password'
          variant='standard'
          margin='dense'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!isPasswordValid && password !== ''}
          helperText={!isPasswordValid && password !== '' ? 'senha inválida' : ''}
        />
        <a href='/recover-password' className={styles.link}>
          Esqueceu sua senha?
        </a>
        <Button
          variant='contained'
          style={{backgroundColor: '#21409A', marginBottom: '24px'}}
          type='submit'
        >
          Entrar
        </Button>
      </form>
      <a href='/register' className={styles.text}>
        Ainda não possui uma conta? <span className={styles.highlightedText}>Cadastre-se aqui.</span>
      </a>
    </div>
  )
}
