import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface FilterButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, active, onPress }) => {
  const iconColor = active ? 'white' : '#9dc9c0';
  let iconName = '';

  if (label === 'All') {
    iconName = 'filter';
  } else if (label === 'Active') {
    iconName = 'robot-excited';
  } else if (label === 'Broken') {
    iconName = 'robot-dead';
  } else if (label === 'Inactive') {
    iconName = 'robot-off';
  }

  return (
    <TouchableOpacity style={[styles.filterButton, active && styles.activeFilterButton]} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      </View>
      <Text style={[styles.filterButtonText, active && styles.activeFilterButtonText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#407369',
    borderRadius: 8,
  },
  filterButtonText: {
    color: '#9dc9c0',
  },
  activeFilterButton: {
    backgroundColor: '#5ca596',
  },
  activeFilterButtonText: {
    color: 'white',
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default FilterButton;