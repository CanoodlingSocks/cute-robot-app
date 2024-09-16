import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 16,
    },
    modalTitleContainer: {
      backgroundColor: '#00baad',
      marginBottom: 15,
      paddingTop: 15,
    },
  modalTitle: {
      color: 'white',
      fontSize: 20,
      marginBottom: 16,
      textAlign: "center",
      fontWeight: "600",
    },
    inputField: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 10,
  },
  pressable: {
    marginTop: 5,
    padding: 8,
    width: "100%",
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center', 
  },
  imagePickerPressable: {
    marginTop: 5,
    padding: 8,
    width: "100%",
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center', 
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
    fontWeight: "600"
  },
  imagePickerText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
    fontWeight: "600"
  },
    selectedFolderText: {
      fontWeight: "600",
      textAlign: "center",
      marginBottom: 20,
      backgroundColor: "#bee0ec",
      padding: 10,
      width: 200,
      borderRadius: 8,
    },
    pickerContainer: {
      marginBottom: 16,
      width: 400,
      alignSelf: 'center',
    },
    pickerLabel: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: "600",
      alignSelf: "center",
    },
    picker: {
      width: "30%",
      backgroundColor: 'lightgray',
      borderWidth: 1,
      borderColor: "gray",
      alignSelf: "center",
    },
    typePicker: {
      width: "45%",
      backgroundColor: 'lightgray',
      borderWidth: 1,
      borderColor: "gray",
      alignSelf: "center",
    },
    pickerItem: {
      textAlign: 'center',
    },
    selectedImage: {
      width: 100,
      height: 100,
      margin: 10,
      alignSelf: 'center',
    },
    buttonContainer: {
      marginBottom: 16,
  },
  iconContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3ba1c5',
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    paddingLeft: 15,
    borderRadius: 10,
  },
buttonContent: {
  flexDirection: 'row',
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
  },
  icon: {
    marginLeft: 10,
  },
    folderAvailabilityMessage: {
      marginTop: 15,
      marginBottom: 15,
    },
    greenText: {
      color: 'green',
    },
    redText: {
      color: 'red',
    },
  });