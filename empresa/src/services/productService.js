// gestionar la logica de conexion con servidor para peticiones relacionadas con productos
import axios from 'axios';


export async function getAllProducts() {
    
    const API_URL = import.meta.env.VITE_API_URL;
    // MANEJO DE ERRORES BASICO
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('ups, no se pudo mostrar la info', error);
        throw error;
    }
}