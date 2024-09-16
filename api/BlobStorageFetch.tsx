import instance from './BaseUrl';
import axios from 'axios';
import FormData from 'form-data';

export const getFolders = async () => {
  try {
    const response = await axios.get(`${instance}/api/BlobStorage/Folders`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Failed to fetch folder names. Server response: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    throw new Error(`Error while fetching folder names: ${error.message}`);
  }
};

export const checkIfFolderExists = async (folderName: string) => {
  try {
    const formData = new FormData();
    formData.append('folderName', folderName);

    const response = await axios.post(
      `${instance}/api/BlobStorage/CheckIfFolderExists`,
      formData,
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Failed to See If Folder Exists: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    throw new Error(`Error While Checking If Folder Exists: ${error.message}`);
  }
};

export const uploadImagesToFolder = async (
  folderName: string,
  images: { uri: string; type: string; name: string }[],
) => {
  try {
    let data = new FormData();
    data.append('folderName', folderName);
    images.forEach((image) => {
      data.append(`imageFiles`, {
        uri: image.uri,
        type: image.type,
        name: image.name,
      });
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${instance}/api/BlobStorage/UploadImages`,
      headers: {
        Cookie: '',
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };

    const response = await axios(config);

    if (response.status !== 200) {
      throw new Error(
        `Error uploading images: ${response.status} - ${response.statusText}`,
      );
    }

    const responseData = response.data;

    const partImageUrl = responseData[0];
    const closeUpImageUrl = responseData[1];

    return { partImageUrl, closeUpImageUrl };
  } catch (error) {
    throw new Error(`Error in uploadImagesToFolder: ${error.message}`);
  }
};

//   try {
//     const formData = new FormData();
//     formData.append('folderName', folderName);
//     // formData.append('imageFiles', imageFiles)

//     // imageFiles.forEach((file, index) => {
//     //   formData.append(`imageFiles[${index}]`, file);
//     // });

//     imageFiles.forEach((file) => {
//       formData.append('imageFiles', file);
//     });

//     console.log("ImageFiles: ", imageFiles)
//     console.log("FormData: ", formData)

//     const response = await axios.post(`${instance}/api/BlobStorage/UploadImages`, [imageFiles], {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     if (response.status === 200) {
//       return response.data;
//     } else {
//       throw new Error(`uploadImagesToFolder Error Response: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) {
//     throw new Error(`uploadImagesToFolder Catch Error: ${error.message} ${error}`);
//   }
// };
