import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8000'; // Cambia esto según tu URL base

const BaseService = {
  get: async (endpoint: string): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.get(`${API_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response ? error.response.data.message : error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  },

  post: async (endpoint: string, data: any): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.post(`${API_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response ? error.response.data.message : error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  },

  put: async (endpoint: string, data: any): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.put(`${API_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response ? error.response.data.message : error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  },

  delete: async (endpoint: string): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.delete(`${API_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response ? error.response.data.message : error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }
};

export default BaseService;
