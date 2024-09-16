import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface StylizedBoxProps {
    iconSource: ImageSourcePropType;
    onPress: () => void;
  }

  const StylizedBox = ({ iconSource, onPress }: StylizedBoxProps) => {
    return (
      <TouchableOpacity style={styles.boxContainer} onPress={onPress}>
        <View style={styles.iconContainer}>
          <Image source={iconSource} style={styles.iconImage} />
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    boxContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    iconContainer: {
      width: 150,
      height: 100,
      borderRadius: 15,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15, 
    },
    iconImage: {
      width: 100,
      height: 100, 
      borderRadius: 5,
    },
  });

export default StylizedBox;
