import axios from 'axios';

import instance from './BaseUrl';
import { getAuthToken } from '../utils/AuthUtils'; 

export const fetchUserRobots = async (userId: number) => {
  try {
    const token = await getAuthToken();
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const response = await axios.get(`${instance}api/User/${userId}/UserRobots`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
    });

    //   console.log("Robot fetch data: ", response.data)
    return response.data;
  } catch (error) {
    console.log("Error Fetching Robots: ", error);
  }
};
