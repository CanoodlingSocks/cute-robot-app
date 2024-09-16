import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FoundingMamaSvg from '../../../assets/founding-mama';
import { styles } from './style';

type InfoScreenProps = NativeStackScreenProps<RootStackParamList, 'Info'>;

const InfoScreen = ({ navigation }: InfoScreenProps) => {
  const goToRobotInfo = (robotModel: string, imageAngle: string) => {
    navigation.navigate('Robot Info', { robotModel, imageAngle });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContent}>
        <Text style={styles.heading}>About ChubbyBot</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            In the year 2019, an unassuming toaster manufacturer embarked on a journey into uncharted terrain. Under the leadership of a young and fiercely ambitious woman, the company's original identity slowly faded into obscurity, paving the way for a new era of innovation. Struggling to gain traction in the competitive toaster market, she noticed a common thread among successful enterprises – the presence of captivating mascots. Driven by her resourcefulness and determination, she ingeniously repurposed discarded toaster components to craft a robot mascot that would soon become the celebrated CHU-66Y.
          </Text>
          <FoundingMamaSvg />
          <Text style={styles.foundingMotherText}>Our Founding Mother</Text>
        </View>

        <Text style={styles.robotListHeading}>Robot Models</Text>
        <RobotListItem robotModel="5-KY - SkyBot" onPress={() => goToRobotInfo('5-KY', 'front')} />
        <RobotListItem robotModel="N0-V4 - NovaBot" onPress={() => goToRobotInfo('N0-V4', 'front')} />
        <RobotListItem robotModel="CHU-66Y - ChubbyBot" onPress={() => goToRobotInfo('CHU-66Y', 'front')} />
      </View>
    </ScrollView>
  );
};

const RobotListItem = ({ robotModel, onPress }: { robotModel: string; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.robotName}>{robotModel}</Text>
    </TouchableOpacity>
  );
};

export default InfoScreen;
