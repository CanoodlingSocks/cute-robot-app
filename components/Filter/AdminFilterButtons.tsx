import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AdminFilterButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

const AdminFilterButton: React.FC<AdminFilterButtonProps> = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={active ? styles.activeFilter : styles.filter}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filter: {
    color: 'black',
  },
  activeFilter: {
    color: 'blue',
  },
});

export default AdminFilterButton;
