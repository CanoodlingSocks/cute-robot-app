type RootStackParamList = {
    Home: undefined;
    UserRobotDetails: { uniqueRobotCode: string; } | undefined; 
    PartDetails: { partName: string; uniqueRobotCode: string } | undefined;
    Login: { text: string } | undefined;
    ForgotPassword: undefined;
    Register: undefined;
    'Robot Panel': undefined;
    'News & Updates': undefined;
    AddNewRobot: undefined;
    'Info & Manuals': undefined;
    'Robot Info': { robotModel: string, imageAngle: string } | undefined;
    Admin: undefined;
    MainBottomTab: undefined;
}

type RobotData = {
    uniqueRobotCode: string;
    modelName: string;
    robotNickname: string;
    isActive: boolean;
    isBroken: boolean;
    image_Background: string,
};
  
type UserRobotImages = {
    partImageUrls: string[];
}