import React, { useState } from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

interface NewsItemProps {
  title: string;
  image: any;
  content: string;
  type: 'news' | 'updates' | 'bugfixes';
  onClick: () => void;
}

const NewsItem = ({ title, image, content, type, onClick }: NewsItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
    onClick(); 
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'news':
        return '#fff5db'; // Yellow background for news
      case 'updates':
        return '#dbf5ff'; // Blue background for updates
      case 'bugfixes':
        return '#f5dbdb'; // Red background for bugfixes
      default:
        return '#ffffff'; // Default background color
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <TouchableOpacity onPress={handleExpand}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {expanded && (
        <View>
          {image && <Image source={image} style={styles.image} />}
          <Text style={styles.content}>{content}</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    marginTop: 10,
  },
  image: {
    alignSelf: 'center',
    width: 350,
    height: 280,
    resizeMode: 'cover',
    marginTop: 10,
  },
});

export default NewsItem;
