import axios from 'axios';
import instance from './BaseUrl';

export const savePart = async (updatedPartData) => {
  try {
    const response = await axios.post(`${instance}/api/Admin/AddPart`, updatedPartData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to save the part. Server response: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error while saving the part: ${error.message}`);
  }
};
  
export const getParts = async (filterOptions) => {
  try {
    const response = await axios.get(`${instance}/api/Admin/GetParts`, filterOptions);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch parts.');
    }
  } catch (error) {
    throw new Error('Error while fetching parts: ' + error.message);
  }
};

export const deletePart = async (partId) => {
  try {
    const response = await axios.delete(`${instance}/api/Admin/DeletePart/${partId}`);
    if (response.status === 200) {
      return true; 
    } else {
      return false;
    }
  } catch (error) {
    throw new Error('Error while deleting part: ' + error.message);
  }
};


