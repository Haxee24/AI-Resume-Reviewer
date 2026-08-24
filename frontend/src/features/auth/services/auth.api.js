import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:3000/api/auth',
    withCredentials: true,
})

export async function loginUser({userid, password}) {
    try{
        const response = await api.post('/login', {userid, password});
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
    
}

export async function registerUser({username, email, password}) {
    try{
        const response = await api.post('/register', {username, email, password});
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
}

export async function logoutUser() {
    try{
        const response = await api.get('/logout');
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
}

export async function getUser() {
    try{
        const response = await api.get('/get-me');
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}