import axios from 'axios';

const API_URL = 'http://localhost:3000'; // URL BACKEND

export default {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      const token = response.data.token;
      localStorage.setItem('authToken', token); // Guardar el token en localStorage
      return true;
    } catch (error) {
      console.error('Error al hacer login:', error.response.data.message);
      return false;
    }
  },
  isAuthenticated: () => {
    const token = localStorage.getItem('authToken');
    return token ? true : false; // Si hay un token, el usuario está autenticado
  },
  logout: () => {
    localStorage.removeItem('authToken'); // Eliminar el token al hacer logout
  }
};