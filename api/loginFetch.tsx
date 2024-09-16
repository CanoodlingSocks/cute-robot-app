import axios from 'axios';
import instance from './BaseUrl';
import { setAuthToken } from '../utils/AuthUtils';

export const fetchLogin = async (data: any) => {
    try {
      const response = await axios.post(`${instance}api/User/Login`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const token = response.data.token;
      await setAuthToken(token);
      
      return response;
    } catch (error) {
      console.log("Fetch Login Error: ", error);
    }
  };