import axios from 'axios';
import instance from './BaseUrl';

export const fetchMetricsData = async (uniqueRobotCode: string) => {
  try {

    const response = await axios.get(`${instance}api/Metrics/${uniqueRobotCode}`, {
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