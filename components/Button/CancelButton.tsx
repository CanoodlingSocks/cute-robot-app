import React from 'react';
import { View, Text, Pressable } from 'react-native';

export const CancelButton = ({ onClose }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightcoral' : 'tomato', // Typical cancel button colors
            padding: 8,
            width: 300,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center', 
          },
        ]}
        onPress={onClose}
      >
        <Text style={{ color: 'white', fontSize: 16, marginRight: 8 }}>
          Cancel
        </Text>
      </Pressable>
    </View>
  );
};

