import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import { styles } from './AddPartStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PartImageSelection = ({
  handleChooseCloseUpImage,
  handleChoosePartImage,
  closeUpImage,
  partImage,
}) => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.imagePickerPressable,
            {
              backgroundColor: pressed ? '#73d6ce' : '#00baad',
              borderWidth: 2,
              borderColor: '#0690AC',
            },
          ]}
          onPress={handleChooseCloseUpImage}
        >
          <Text style={styles.imagePickerText}>Choose Close-Up Image</Text>
          <Icon name="image" size={25} color="white" />
        </Pressable>
      </View>
      {closeUpImage && <Image source={{ uri: closeUpImage }} style={styles.selectedImage} />}
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.imagePickerPressable,
            {
              backgroundColor: pressed ? '#73d6ce' : '#00baad',
              borderWidth: 2,
              borderColor: '#0690AC',
            },
          ]}
          onPress={handleChoosePartImage}
        >
          <Text style={styles.imagePickerText}>Choose Part Image         </Text>
          <Icon name="image" size={25} color="white" />
        </Pressable>
      </View>
      {partImage && <Image source={{ uri: partImage }} style={styles.selectedImage} />}
    </View>
  );
};

export default PartImageSelection;
