import axios from 'axios';
import instance from './BaseUrl';
import { setUserNickname } from '../utils/UserUtils';

export const getUserById = async (userId: number) => {
  try {
    const response = await axios.get(`${instance}Api/User/${userId}`);
    const userData = response.data;
    
    const nickname = userData[0]?.nickname || 'buddy';
    
    console.log(userData);
    console.log(nickname);
    
    await setUserNickname(nickname);

    return;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
