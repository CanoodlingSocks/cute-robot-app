import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import instance from '../../api/BaseUrl';

interface BackgroundImageModalProps {
  visible: boolean;
  onClose: () => void;
}

const BackgroundImageModal: React.FC<BackgroundImageModalProps> = ({ visible, onClose }) => {
  const [backgroundImages, setBackgroundImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${instance}/api/BlobStorage/background-images`);
        const data = await response.json();
        setBackgroundImages(data);
      } catch (error) {
        console.error('Error fetching background images:', error);
      }
    };

    if (visible) {
      fetchImages();
    }
  }, [visible]);

  // Organize images into categories
  const categorizedImages = backgroundImages.reduce((acc, image) => {
    const categoryName = image.category || 'Uncategorized'; // Default to "Uncategorized" if no category
    if (!acc[categoryName]) {
        acc[categoryName] = [];
    }
    acc[categoryName].push(image);
    return acc;
  }, {});

  return (
      <Modal isVisible={visible} onBackdropPress={onClose}>
        <ScrollView>
      <View>
        <Text style={styles.title}>Choose a Background Image</Text>
        {Object.entries(categorizedImages).map(([category, images]) => (
          <View key={category}>
                <Text style={styles.categoryTitle}>{category}</Text>

            <FlatList
  horizontal
  data={images as any[]} 
  keyExtractor={(item) => item.imageName}
  renderItem={({ item }) => (
      <View style={styles.imageContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.horizontalImage} />
    </View>
  )}
/>
          </View>
        ))}
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeBtn}>Close</Text>
        </TouchableOpacity>
      </View>
  </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 10,
  },
  horizontalImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
      marginBottom: 5,
      borderWidth: 2,
    borderColor: '#5ca596',
  },
  imageName: {
    textAlign: 'center',
    color: 'white',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
      marginBottom: 5,
    color: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
          marginBottom: 5,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green',
        width: 250,
        padding: 9,
        borderRadius: 5,
        alignSelf:'center',
    },
    closeBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
          marginBottom: 5,
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#f73d3e',
        width: 90,
        padding: 9,
        borderRadius: 5,
        alignSelf:'center',
    },
});

export default BackgroundImageModal;