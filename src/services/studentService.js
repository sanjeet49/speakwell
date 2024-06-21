// src/services/studentService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';
const AUTH = {
    username: 'admin', // Use your actual admin username
    password: 'password' // Use your actual admin password
};

export const getAllStudents = async () => {
    try {
        const response = await axios.get(API_URL, { auth: AUTH });
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the students!', error);
        throw error;
    }
};

// other service functions
export const getStudentById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`, { auth: AUTH });
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the student!', error);
        throw error;
    }
};

export const createStudent = async (student) => {
    try {
        const response = await axios.post(API_URL, student, {
            auth: AUTH,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('There was an error creating the student!', error);
        throw error;
    }
};

export const updateStudent = async (id, student) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, student, {
            auth: AUTH,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('There was an error updating the student!', error);
        throw error;
    }
};

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`, { auth: AUTH });
    } catch (error) {
        console.error('There was an error deleting the student!', error);
        throw error;
    }
};
