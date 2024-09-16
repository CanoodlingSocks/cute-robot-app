import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleProp, ViewStyle } from 'react-native';
import { fetchUserRobotImages } from '../api/UserRobotImagesFetch';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

interface RenderRobotImagesProps {
  uniqueRobotCode: string;
  imageWidth: number;
  imageHeight: number;
}

const RenderRobotImages: React.FC<RenderRobotImagesProps> = ({ uniqueRobotCode, imageWidth, imageHeight }) => {
  const [userRobotImages, setUserRobotImages] = useState<UserRobotImages | null>(null);
  const [showSpinner, setShowSpinner] = useState<boolean>(true);

  useEffect(() => {
    if (uniqueRobotCode) {
      fetchUserRobotImages(uniqueRobotCode)
        .then((data) => {
          setUserRobotImages(data);
          setShowSpinner(false);
        })
        .catch((error) => console.error('UserRobotImageGallery Fetch error:', error));
    }
  }, [uniqueRobotCode]);

  const containerStyle: StyleProp<ViewStyle> = {
    position: 'absolute',
    top: '35%', 
    left: '65%',
      alignItems: 'center',
    };
    
    const imageContainerStyle: StyleProp<ViewStyle> = {
        width: imageWidth,
        height: imageHeight,
        position: 'absolute',
        top: '50%',
        marginTop: -imageHeight / 2, 
        transform: [{ translateX: -imageWidth / 2 }],
    //     borderWidth: 5,
    //   borderColor: 'red',
  };

  return (
    <View style={containerStyle}>
      {showSpinner && <LoadingSpinner visible={true} size="large" color="#FF5733" />}
      {userRobotImages && userRobotImages.partImageUrls ? (
        userRobotImages.partImageUrls.map((imageURL, index) => (
          <View style={imageContainerStyle} key={index}>
            <Image source={{ uri: imageURL }} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </View>
        ))
      ) : (
        <Text>No images available</Text>
      )}
    </View>
  );
};

export default RenderRobotImages;

