import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

interface CreateNewFolderProps {
  folderName: string;
  setFolderName: (text: string) => void;
  handleCheckFolderAvailability: () => void;
  folderAvailabilityMessage: string;
}

const CreateNewFolder: React.FC<CreateNewFolderProps> = ({
  folderName,
  setFolderName,
  handleCheckFolderAvailability,
  folderAvailabilityMessage,
}) => {
  return (
    <View>
      <TextInput
        style={styles.inputField}
        placeholder="Folder Name"
        value={folderName}
        onChangeText={(text) => setFolderName(text)}
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#bee0ec' : '#3ba1c5',
            padding: 8,
            borderColor: '#008000',
            borderWidth: 2,
            width: 300,
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 8,
          },
        ]}
        onPress={() => handleCheckFolderAvailability()}
      >
        <Text style={styles.buttonText}>Check Availability</Text>
      </Pressable>
      <View style={styles.folderAvailabilityMessage}>
        <Text>{folderAvailabilityMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  folderAvailabilityMessage: {
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CreateNewFolder;
