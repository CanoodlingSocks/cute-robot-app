import axios from "axios";
import instance from "./BaseUrl";

export const fetchUserRobotImages = async (uniqueRobotCode: string) => {
    try {
        const response = await axios.get(`${instance}/api/User/UserRobots/${uniqueRobotCode}`);
        // console.log("Fetching images: ", response.data)
        return response.data;
    }
    catch (error) {
        console.error('Error fetching UserRobot images: ', error)
        throw error;
    }
};