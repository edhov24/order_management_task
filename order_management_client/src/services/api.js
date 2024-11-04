import axios from 'axios';

const API_URL = 'http://172.16.10.75:5001';

export const getClientsAndOrders = async () => {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
};

export const fetchClients = async () => {
    const response = await axios.get(`${API_URL}/clients/all`);
    return response.data;
};

export const addClient = async (clientData) => {
    return await axios.post(`${API_URL}/clients`, clientData);
};

export const addOrder = async (orderData) => {
    return await axios.post(`${API_URL}/orders`, orderData);
};
