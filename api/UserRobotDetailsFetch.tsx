import axios from 'axios';
import instance from './BaseUrl';

export const fetchUserRobotDetails = async (uniqueRobotCode: string) => {
  try {
   
    const response = await axios.get(`${instance}api/Robot/${uniqueRobotCode}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error Fetching Robots: ", error);
  }
};
