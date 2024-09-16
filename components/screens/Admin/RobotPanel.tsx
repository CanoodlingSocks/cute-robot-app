import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddPartModal from "../../Modal/AddPartModal";
import AddRobotModal from "../../Modal/AddRobotModal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import ViewPartsModal from "../../Modal/ViewPartsModal";

const RobotPanel = () => {
  const [isAddingPart, setAddingPart] = useState<boolean>(false);
  const [isAddingRobot, setAddingRobot] = useState<boolean>(false);
  const [isViewingParts, setViewParts] = useState<boolean>(false);

  const handleViewParts = () => {
    setViewParts(true);
  };

  const handleAddPart = () => {
    setAddingPart(true);
  };

  const handleAddRobot = () => {
    setAddingRobot(true);
  };

  return (
    <View style={styles.panelContainer}>
      <Text>Robot Panel Content</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddPart}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Add New Part   </Text>
            <Icon name="robot-industrial" size={25} color="white" />
          </View>
        </TouchableOpacity>
        {isAddingPart && (
          <AddPartModal isVisible={isAddingPart} onClose={() => setAddingPart(false)} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddRobot}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Add New Robot</Text>
            <Icon name="robot-love" size={25} color="white" />
          </View>
        </TouchableOpacity>
        {isAddingRobot && (
          <AddRobotModal isVisible={isAddingRobot} onClose={() => setAddingRobot(false)} />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleViewParts}>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>       View Parts  </Text>
            <Icon name="wrench" size={25} color="white" />
        </View>
      </TouchableOpacity>

      <ViewPartsModal
        isVisible={isViewingParts}
        onClose={() => setViewParts(false)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#51a2ab', 
    borderRadius: 20, 
    padding: 20, 
    margin: 10,
    width: 200,
  },
  buttonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginRight: 8,
  },
});

export default RobotPanel;
