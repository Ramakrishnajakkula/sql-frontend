import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const API_KEY = import.meta.env.VITE_API_KEY

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json'
  }
})

export const translateQuery = async (query) => {
  try {
    const response = await api.post('/query', { query })
    return response.data
  } catch (error) {
    console.error('Translation error:', error)
    throw error
  }
}

export const explainQuery = async (query) => {
  try {
    const response = await api.post('/explain', { query })
    return response.data
  } catch (error) {
    console.error('Explanation error:', error)
    throw error
  }
}

export const validateQuery = async (query) => {
  try {
    const response = await api.post('/validate', { query })
    return response.data
  } catch (error) {
    console.error('Validation error:', error)
    throw error
  }
}