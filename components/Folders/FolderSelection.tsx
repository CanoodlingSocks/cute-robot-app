import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface FolderSelectionProps {
  folders: string[];
  handleFolderClick: (folderName: string) => void;
}

const FolderSelection: React.FC<FolderSelectionProps> = ({
  folders,
  handleFolderClick,
}) => {
  return (
    <View style={styles.foldersContainer}>
    <Text style={styles.foldersHeaderText}>Select a Folder</Text>
    {folders.map((folderName, index) => (
      <TouchableOpacity
        key={folderName}
        onPress={() => handleFolderClick(folderName)}
        style={[styles.folderItem, index % 2 === 0 ? styles.lightBlueBackground : null]}
      >
        <Text style={styles.folderName}>{folderName}</Text>
      </TouchableOpacity>
    ))}
  </View>
  );
};

const styles = StyleSheet.create({
  foldersContainer: {
    flex: 1,
    width: "80%",
    marginBottom: 16,
    alignSelf: 'center',
  },
  foldersHeaderText: {
    backgroundColor: '#f3f5f8',
    borderColor: '#02968c',
    borderWidth: 2,
    borderStyle: 'solid', 
    fontSize: 16,
    padding: 8,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 0,
    color: '#02968c',
    borderRadius: 5,
  },
  folderItem: {
    backgroundColor: '#d7f5f2',
    padding: 8,
    marginBottom: 4,
    alignItems: 'center',
  },
  lightBlueBackground: {
    backgroundColor: '#afebe5',
  },
  folderName: {
    fontWeight: '500',
    color: '#016962',
  }
});

export default FolderSelection;
