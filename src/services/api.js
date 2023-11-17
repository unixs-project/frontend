import axios from 'axios'
import { api } from './baseApi'

export const createUser = async (newUserData) => {
  try {
    const response = await api.post('/signup', newUserData)
    return response.data
  } catch (error) {
    console.log('Erro ao cadastrar usuário ', error)
  }
}

export const login = async (userLoginData) => {
  try {
    const response = await api.post('/login', userLoginData)

    console.log(response)
    return response
  } catch (error) {
    console.log('Erro ao realizar login ', error)
  }
}

// WIP
// export const createNewFlow = async (flowData) => {
//   try {
//     const response = await api.post('/create_flow', flowData, {
//       headers: {
//         Authorization: 'YourAccessToken', // Include the necessary authorization header
//         // Other headers if needed
//       },
//     })

//     console.log(response.data) // Handle the response as needed

//     // Reset the form or navigate to another page on success
//   } catch (error) {
//     console.error('Error creating flow:', error)
//     // Handle error, show a user-friendly message, etc.
//   }
// }
