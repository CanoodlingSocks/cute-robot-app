import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TextStroke } from '../../../utils/TextStroke';
import StatusBox from '../../Boxes/statusBox';
import { getUserIdFromSecureStore } from '../../../utils/TokenUtils';
import { getUserById } from '../../../api/UserFetch';
import { getUserNickname } from '../../../utils/UserUtils';
import { styles } from './style';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [userNickname, setUserNickname] = useState<string | null>(null);
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await getUserIdFromSecureStore();

        if (userId) {
          await getUserById(userId);
          const nickname = await getUserNickname();
          setUserNickname(nickname || 'buddy');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const navigateTo = (routeName: keyof RootStackParamList) => {
    navigation.navigate(routeName);
  };

  const handlePress = (itemLabel: string) => {
    setPressedItem(itemLabel);
    setTimeout(() => setPressedItem(null), 100);
    navigateTo(itemLabel as keyof RootStackParamList);
  };

  const menuItemsStackOne = [
    { image: require('../../../assets/warm_inviting.png'), label: 'My Robots', route: 'My Robots' },
    { image: require('../../../assets/newspaper.png'), label: 'News & Updates', route: 'News & Updates' },
  ];

  const menuItemsStackTwo = [
    { image: require('../../../assets/infopic.png'), label: 'Info & Manuals', route: 'Info & Manuals' },
  ];

  const renderMenuItem = (item: { image: any; label: string; route: keyof RootStackParamList }) => (
    <TouchableOpacity
      key={item.label}
      onPress={() => handlePress(item.label)}
      activeOpacity={0.7}
      style={[
        styles.pressableButton,
        { shadowColor: pressedItem === item.label ? '#000' : '#f4f4f4' },
      ]}
    >
      <Image source={item.image} style={styles.iconImage} />
      <View style={styles.greenOverlay} />
      <View style={styles.buttonTextContainer}>
        <TextStroke stroke={1.5} color="#000000">
          <Text style={styles.buttonText}>{item.label}</Text>
        </TextStroke>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.defaultProfilePicture}>
            <Text>👤</Text>
          </View>
        </View>
        <Text style={styles.bannerText}>Hi there {userNickname}!</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.iconContainer}>{menuItemsStackOne.map(renderMenuItem)}</View>
          <StatusBox />
          <View style={styles.iconContainer}>{menuItemsStackTwo.map(renderMenuItem)}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;