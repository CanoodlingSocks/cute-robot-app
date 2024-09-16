import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FilterButton from '../../Filter/FilterButtons';
import { getUserIdFromSecureStore } from '../../../utils/TokenUtils';
import { fetchUserRobots } from '../../../api/UserRobotsFetch';
import { styles } from './style';
import RenderRobotImages from '../../../utils/RenderRobotImages';

type MyRobotsScreenProps = NativeStackScreenProps<RootStackParamList, 'Robot Panel'>;

const MyRobotsScreen = ({ navigation }: MyRobotsScreenProps) => {
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [userRobots, setUserRobots] = useState([]);

  useEffect(() => {
    getUserIdFromSecureStore()
      .then((userId) => {
        if (userId) {
          fetchUserRobots(userId)
            .then((data) => setUserRobots(data))
            .catch((error) => console.error('Error fetching user robots:', error));
        } else {
          console.error('UserId not found in token');
        }
      })
      .catch((error) => console.error('Error retrieving user ID from token:', error));
  }, []);

  const handleRobotPress = (item) => {
    navigation.navigate('UserRobotDetails', { uniqueRobotCode: item });
  };

  const renderRobotItem = ({ item }: { item: RobotData }) => {
    let rowColor = 'grey';

    if (item.isBroken) {
      rowColor = 'red';
    } else if (item.isActive) {
      rowColor = 'green';
    }

    if (
      (currentFilter === 'active' && !item.isActive) ||
      (currentFilter === 'broken' && !item.isBroken) ||
      (currentFilter === 'inactive' && item.isActive)
    ) {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => handleRobotPress(item.uniqueRobotCode)} activeOpacity={0.7}>
        <View>
          <ImageBackground
            source={{ uri: item.image_Background }}
            style={[styles.robotRow, { borderColor: rowColor }]}
            imageStyle={styles.backgroundImage}
          >
            <View>
              <Text style={styles.robotName}>{item.robotNickname}</Text>
              <Text style={styles.robotModel}>{item.modelName}</Text>
            </View>

            <View style={styles.imageBox}>
              <View style={styles.imageShadow} />
            </View>
            <View style={styles.imageCorrection}>
              <RenderRobotImages uniqueRobotCode={item.uniqueRobotCode} imageWidth={220} imageHeight={220} />
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.filterButtons}>
          <FilterButton label="All" active={currentFilter === 'all'} onPress={() => setCurrentFilter('all')} />
          <FilterButton label="Active" active={currentFilter === 'active'} onPress={() => setCurrentFilter('active')} />
          <FilterButton label="Broken" active={currentFilter === 'broken'} onPress={() => setCurrentFilter('broken')} />
          <FilterButton
            label="Inactive"
            active={currentFilter === 'inactive'}
            onPress={() => setCurrentFilter('inactive')}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={userRobots} keyExtractor={(item) => item.uniqueRobotCode} renderItem={renderRobotItem} />
      </View>
    </View>
  );
};

export default MyRobotsScreen;