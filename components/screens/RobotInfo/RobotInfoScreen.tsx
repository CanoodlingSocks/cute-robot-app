import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RobotComponents from '../../core/robotComponents';
import robotImages from '../../core/robotTurnaround';
import { styles } from './style'; // Import styles from a separate file

type RobotInfoScreenProps = NativeStackScreenProps<RootStackParamList, 'RobotInfo'>;

const renderRobotComponent = ({ robotModel, imageAngle }: { robotModel: string, imageAngle: string }) => {
  const component = RobotComponents[robotModel]?.[imageAngle];
  if (component) {
    return React.createElement(component);
  }
  return null;
};

const RobotInfoScreen = ({ route }: RobotInfoScreenProps) => {
  const [currentRobotImage, setCurrentRobotImage] = useState<number>(0);
  const { robotModel } = route.params;
  const modelName = route.params?.robotModel;
  const RobotComponent = RobotComponents[modelName];

  if (!RobotComponent) {
    return <Text>Robot not found</Text>;
  }

  const currentRobot = robotImages.find(robot => robot.name === robotModel);
  const imageKeys = currentRobot ? Object.keys(currentRobot.imageNames) : [];
  const currentImageKey = imageKeys[currentRobotImage];

  const robotComponent = renderRobotComponent({ robotModel, imageAngle: currentImageKey });

  if (!currentRobot) {
    return <Text>Robot not found</Text>;
  }

  const handlePrevImg = () => {
    setCurrentRobotImage(prevIndex => (prevIndex === 0 ? imageKeys.length - 1 : prevIndex - 1));
  };

  const handleNextImg = () => {
    setCurrentRobotImage(prevIndex => (prevIndex === imageKeys.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContent}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{currentRobot.heading}</Text>
          <Text style={styles.subtitle}>{currentRobot.subtitle}</Text>
          <Text style={styles.robotDescription}>{currentRobot.description}</Text>
        </View>
        <View style={styles.imageWithButtonsContainer}>
          <View style={styles.imageContainer}>{robotComponent}</View>
          <View style={styles.navigationButtons}>
  <TouchableOpacity onPress={handlePrevImg}>
    <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} />
  </TouchableOpacity>
  <TouchableOpacity onPress={handleNextImg}>
    <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
  </TouchableOpacity>
</View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.robotDescription}>{currentRobot.description2}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RobotInfoScreen;
