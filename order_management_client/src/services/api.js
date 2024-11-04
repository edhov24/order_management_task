import axios from 'axios';

const {REACT_APP_API_URL} = process.env;

export const getClientsAndOrders = async () => {
    const response = await axios.get(`${REACT_APP_API_URL}/orders`);
    return response.data;
};

export const fetchClients = async () => {
    const response = await axios.get(`${REACT_APP_API_URL}/clients/all`);
    return response.data;
};

export const addClient = async (clientData) => {
    return await axios.post(`${REACT_APP_API_URL}/clients`, clientData);
};

export const addOrder = async (orderData) => {
    return await axios.post(`${REACT_APP_API_URL}/orders`, orderData);
};
