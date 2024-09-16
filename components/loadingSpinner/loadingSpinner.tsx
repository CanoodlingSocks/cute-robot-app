import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal, Text } from 'react-native';

interface LoadingSpinnerProps {
  size?: 'small' | 'large';
  color?: string;
  loadingMessage?: string;
  visible: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'large',
  color = '#000000',
  loadingMessage = 'Loading...',
  visible = false,
}) => {
  return (
    <Modal transparent animationType="none" visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          {loadingMessage && <Text style={styles.loadingText}>{loadingMessage}</Text>}
          <ActivityIndicator size={size} color={color} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  modalContainer: {
    width: 200,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoadingSpinner;