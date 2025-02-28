import axios from 'axios';


const API_URL = 'http://localhost:3003/users';

export const addUser = async (data) => {
    try{
        const response = await axios.get(API_URL);
        const users = response.data;

        // Find the highest ID and increment it
        const nextId = users.length > 0 ? (Math.max(...users.map(user => Number(user.id))) + 1).toString() : "1";


        // Assign the correct ID
        const newUser = { ...data, id: nextId };

        return await axios.post(API_URL, newUser);
    }catch (error){
        console.log('Error while calling addUser api', error.message);
    }
}

export const getUsers = async () => {
    try{
        return await axios.get(API_URL);
    }catch(error){
        console.log("Error while calling getusers api", error.message);
    }
}

export const getUser = async (data) => {
    try{
        return await axios.get(`${API_URL}/${data}`);
    }catch(error){
        console.log("Error while calling getusers api", error.message);
    }
}

export const editUser = async(data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    }catch(error){
        console.log('Error while calling editUser api', error.message);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteUser api', error.message);
    }
}