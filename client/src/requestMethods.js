import axios from "axios";
// export const BASE_URL = "http://localhost:5000/api"
export const BASE_URL = "https://dns-managment.onrender.com/api"

// ---------------------------Dns records requests

export const getAllDns = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const createDns = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateDns = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteDnsRecord = async (endpoint, method, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getSingleDns = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


// -----------------------------------  -user requests


export const deleteUser = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getSingleUser = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,

    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};



