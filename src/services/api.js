import axios from 'axios'
import { api } from './baseApi'
import { useAuth } from '../context/AuthContext'

export const createUser = async (newUserData) => {
  try {
    const response = await api.post('/signup', newUserData)

    return response
  } catch (error) {
    console.log('Erro ao cadastrar usuário ', error)
  }
}

export const login = async (userLoginData) => {
  try {
    const response = await api.post('/login', userLoginData)

    console.log(response.data)
    const authToken = response.data.token
    sessionStorage.setItem('authToken', authToken)

    return response
  } catch (error) {
    console.log('Erro ao realizar login ', error)
  }
}

export const createNewFlow = async (flowData, authToken) => {
  try {
    const response = await api.post('/create_flow', flowData, {
      headers: {
        Authorization: authToken,
      },
    })

    console.log(response)
    return response
  } catch (error) {
    console.error('Error creating flow:', error)
  }
}
