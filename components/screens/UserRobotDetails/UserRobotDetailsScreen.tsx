import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RenderRobotImages from '../../../utils/RenderRobotImages';
import { styles } from './style';
import { fetchUserRobotDetails } from '../../../api/UserRobotDetailsFetch';
import MetricsChart from '../../../utils/MetricsChart';
import EditNicknameModal from '../../Modal/EditNicknameModal';
import BackgroundImageModal from '../../Modal/ChangeImageModal';

type UserRobotDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'UserRobotDetails'>;

const UserRobotDetailsScreen = ({ route, navigation }: UserRobotDetailsScreenProps) => {
  const { uniqueRobotCode } = route.params;
  const [robotDetails, setRobotDetails] = useState<RobotData | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isImageModalVisible, setImageModalVisible] = useState<boolean>(false);
  const [forceRender, setForceRender] = useState(false); 

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToPartDetails = (partName: string) => {
    navigation.navigate('PartDetails', { partName, uniqueRobotCode });
  };

  const handleEditNickname = () => {
    setModalVisible(true);
  }

  const handleNicknameChange = () => {
    setModalVisible(false);
  };

  const handleModalClose = () => {
    setForceRender(prevForceRender => !prevForceRender);
  };

  const handleChangeBackgroundImage = () => {
    setImageModalVisible(true);
  }

  // const handleNicknameUpdated = async () => {
  //   if (uniqueRobotCode) {
  //     try {
  //       const data = await fetchUserRobotDetails(uniqueRobotCode);
  //       const updatedRobotDetails = data[0];
  //       setRobotDetails(updatedRobotDetails);
  //     } catch (error) {
  //       console.error('Error re-fetching details:', error);
  //     }
  //   }
  // };

  useEffect(() => {
    if (uniqueRobotCode) {
      fetchUserRobotDetails(uniqueRobotCode)
        .then((data) => {
          const robotDetails = data[0];
          setRobotDetails(robotDetails);
        })
        .catch((error) => console.error('DetailsScreen Details Fetch error:', error));
    }
  }, [uniqueRobotCode, forceRender]); 

  const imageWidth = 500;
  const imageHeight = 500;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.nicknameContainer}>
          <Text style={[styles.robotNicknameText, { fontSize: 26 }]}>
            {robotDetails?.robotNickname}
            <TouchableOpacity onPress={() => handleEditNickname()}>
              <MaterialIcons style={{ paddingLeft: 5 }} name="edit" size={20} color="white" />
            </TouchableOpacity>
          </Text>
        </View>
        <Text style={[styles.robotModelText, { fontSize: 20 }]}>{robotDetails?.modelName}</Text>
      </View>

      <View style={styles.imageContainer}>
      <View style={styles.editButtonContainer}>
  <TouchableOpacity onPress={() => handleChangeBackgroundImage()}>
    <MaterialIcons style={{ paddingLeft: 5 }} name="edit" size={20} color="red" />
  </TouchableOpacity>
</View>
        <ImageBackground
          source={{ uri: robotDetails?.image_Background }}
          style={styles.image}
        >
          <View style={styles.imageBox}>
            <View style={styles.imageShadow} />
          </View>
          <View style={styles.imageCorrection}>
            <RenderRobotImages uniqueRobotCode={uniqueRobotCode} imageWidth={imageWidth} imageHeight={imageHeight} />
          </View>
        </ImageBackground>
      </View>

      <EditNicknameModal
        visible={isModalVisible}
        uniqueRobotCode={uniqueRobotCode}
        oldNickname={robotDetails?.robotNickname}
        onClose={() => setModalVisible(false)}
        onNicknameChange={handleNicknameChange}
        onModalClose={handleModalClose}
      />

<BackgroundImageModal
        visible={isImageModalVisible}
        onClose={() => setImageModalVisible(false)}
      />


      <View style={[styles.card, { position: 'absolute', top: '60%' }]}>
        <Text style={styles.cardTitle}>General Operating Status</Text>
        <Text style={styles.cardText}></Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <MetricsChart uniqueRobotCode={uniqueRobotCode} />
      </ScrollView>
    </View>
  );
};

export default UserRobotDetailsScreen;