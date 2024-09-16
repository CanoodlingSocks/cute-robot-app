import React, { useState, useEffect } from "react";
import { View, Text, Modal, TextInput, ScrollView, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAvoidingView, Platform } from 'react-native';
import { getFolders, checkIfFolderExists } from "../../api/BlobStorageFetch";
import FolderSelection from "../Folders/FolderSelection";
import CreateNewFolder from "../Folders/CreateNewFolder";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { uploadImagesToFolder } from "../../api/BlobStorageFetch";
import { savePart } from "../../api/AdminFetch";
import { styles } from "./AddPartStyles"
import PartImageSelection from "./PartImageSelection";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CancelButton } from "../Button/CancelButton";

const AddPartModal = ({ isVisible, onClose }) => {

  //--------------- USESTATES FETCH DATA -------------------------
  const [partName, setPartName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [partType, setPartType] = useState<string>('');
  //Url:s for images should be stored here
  const [closeUpImage, setCloseUpImage] = useState<string>('');
  const [partImage, setPartImage] = useState<string>('');
  const [imageRenderOrder, setImageRenderOrder] = useState<number | null>(null);

  //Stores URI:s
  const [closeUpImageUri, setCloseUpImageUri] = useState<string>('');
  const [partImageUri, setPartImageUri] = useState<string>('');


  // -------- SAVE PART BUTTON AND LOADING SPINNER ----------------
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  // ------------ USESTATES FOLDERS -------------------------------
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('');
  const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
  const [folderAvailabilityMessage, setFolderAvailabilityMessage] = useState<string>('');
  const [folderName, setFolderName] = useState<string>('');

  // ------------ USESTATES TEXTINPUT ISFOCUSED --------------------
  const [isFocusedPartName, setIsFocusedPartName] = useState<boolean>(false);
  const [isFocusedDescription, setIsFocusedDescription] = useState<boolean>(false);

  //--------------------- FOLDERS --------------------------------
  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const foldersData = await getFolders();
      setFolders(foldersData);
    } catch (error) {
      console.error('Error fetching folders:', error);
    }
  };

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
    setFolderName(folderName);
    setIsCreatingFolder(false);
  };

  const handleCheckFolderAvailability = async () => {
    try {
      const response = await checkIfFolderExists(folderName);
      setSelectedFolder(folderName);

      let availabilityMessage;

      if (response === "Folder is available") {
        availabilityMessage = (
          <Text style={styles.greenText}>✔ {response}</Text>
        );
        setTimeout(() => {
          setIsCreatingFolder(false);
        }, 1000);
      } else {
        availabilityMessage = (
          <Text style={styles.redText}>✘ Folder already exists.</Text>
        );
      }

      setFolderAvailabilityMessage(availabilityMessage);
    } catch (error) {
      console.error('Error while checking folder availability:', error.message);
    }
  };

  //------------------ IMAGE PICKERS ----------------------------

  const handleChooseCloseUpImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setCloseUpImageUri(result.assets[0].uri);

      handleInputChange();
    }
  };

  const handleChoosePartImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPartImageUri(result.assets[0].uri);

      handleInputChange();
    }
  };

  //-------------------- UPLOAD IMAGES AND SAVE PART ---------------------------

  const extractFileName = (uri: string) => {
    const uriParts = uri.split('/');
    return uriParts[uriParts.length - 1];
  };

  const handleInputChange = () => {
    if (partName && description && partType && selectedFolder && closeUpImageUri) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const uploadImage = async () => {
    try {
      const imageObjects = [
        { uri: partImageUri, type: 'image/png', name: extractFileName(partImageUri) },
        { uri: closeUpImageUri, type: 'image/png', name: extractFileName(closeUpImageUri) },
      ];

      const response = await uploadImagesToFolder(folderName, imageObjects);
      console.log('uploadImagesToFolder response:', response);

      console.log('Close Up Image URL:', response.closeUpImageUrl);
      console.log('Part Image URL:', response.partImageUrl);

      const closeUpImageUrl = response.closeUpImageUrl;
      const partImageUrl = response.partImageUrl;

      setCloseUpImage(closeUpImageUrl);
      setPartImage(partImageUrl);
      const partData = {
        partName: partName,
        description: description,
        type: partType,
        closeUpImage: closeUpImageUrl,
        partImage: partImageUrl,
        order: imageRenderOrder,
      };

      return partData;
    } catch (error) {
      throw new Error(`UploadImage Error: ${error.message}`);
    }
  };

  //isLoading & Save Part

  const handleSavePart = async () => {
    setIsButtonDisabled(true);
    setIsLoading(true);
    setLoadingMessage('Uploading Images...');

    try {
      const updatedPartData = await uploadImage();
      setLoadingMessage('Uploading Successful, Saving Part');
      const saveResponse = await savePart(updatedPartData);

      if (saveResponse) {
        setLoadingMessage('Part Was Successfully Saved');
        setIsLoading(false);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setTimeout(() => {
          setLoadingMessage('Part save failed');
          setIsLoading(false);
          setIsButtonDisabled(false);
        }, 3000);
      }
    } catch (error) {
      console.log("handleSavePart Catch Error: ", error);
      setTimeout(() => {
        setLoadingMessage('Part save failed');
        setIsButtonDisabled(false);
      }, 3000);
    }
  };
  //-----------------------------------------------------------------------

  return (
    <Modal visible={isVisible} animationType="slide">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView>
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Add New Part</Text>

            </View>
            {/* PART NAME INPUT  */}
            <TextInput
              style={[styles.inputField, { borderColor: isFocusedPartName ? '#00baad' : 'gray' }]}
              placeholder="Part Name"
              value={partName}
              onChangeText={(text) => {
                setPartName(text);
                handleInputChange();
              }}
              onFocus={() => setIsFocusedPartName(true)}
              onBlur={() => setIsFocusedPartName(false)}
              selectionColor='#00baad'
            />
            {/* DESCRIPTION INPUT  */}
            <TextInput
              style={[styles.inputField, { borderColor: isFocusedDescription ? '#00baad' : 'gray' }]}
              placeholder="Description"
              value={description}
              onChangeText={(text) => {
                setDescription(text);
                handleInputChange();
              }}
              multiline
              onFocus={() => setIsFocusedDescription(true)}
              onBlur={() => setIsFocusedDescription(false)}
              selectionColor='#00baad'
            />
            {/* PART TYPE PICKER  */}
            <View style={[styles.pickerContainer, { width: 400 }]}>
              <Text style={styles.pickerLabel}>Part Type</Text>
              <Picker
                selectedValue={partType}
                onValueChange={(value) => {
                  setPartType(value);
                  handleInputChange();
                }}
                style={styles.typePicker}
              >
                {["", "Head", "Body", "LeftArm", "RightArm", "LeftLeg", "RightLeg"].map((value) => (
                  <Picker.Item label={value || "Select a type"} value={value} key={value || "Select a type"} style={styles.pickerItem} />
                ))}
              </Picker>
            </View>
            {/* IF FOLDER IS/ISN'T SELECTED */}
            {selectedFolder ? (
              <View style={styles.buttonContainer}>
                <Text style={styles.selectedFolderText}>Selected Folder is: {selectedFolder}</Text>
                <Pressable
                  style={({ pressed }) => [
                    styles.pressable,
                    {
                      backgroundColor: pressed ? '#bee0ec' : '#3ba1c5',
                      borderColor: '#0690AC',
                      borderWidth: 2,
                    },
                  ]}
                  onPress={() => setSelectedFolder('')}
                >
                  <Text style={styles.text}>Choose another folder   </Text>
                  <Icon name="folder-edit" size={25} color="white" />
                </Pressable>
              </View>
            ) : null}
            {!selectedFolder ? (
              <FolderSelection folders={folders} handleFolderClick={handleFolderClick} />
            ) : null}

            {/* IF CREATING NEW FOLDER */}
            {isCreatingFolder ? (
              <CreateNewFolder
                folderName={folderName}
                setFolderName={setFolderName}
                handleCheckFolderAvailability={handleCheckFolderAvailability}
                folderAvailabilityMessage={folderAvailabilityMessage}
              />
            ) : selectedFolder ? (
              //  IMAGE PICKERS
              <View>
                <PartImageSelection
                  handleChooseCloseUpImage={handleChooseCloseUpImage}
                  handleChoosePartImage={handleChoosePartImage}
                  closeUpImage={closeUpImageUri}
                  partImage={partImageUri}
                />
                {/* IMAGE RENDER ORDER PICKER  */}
                <View style={[styles.pickerContainer, { width: 750 }]}>
                  <Text style={styles.pickerLabel}>Image Render Order</Text>
                  <Picker
                    selectedValue={imageRenderOrder ? imageRenderOrder.toString() : ""}
                    onValueChange={(value) => {
                      setImageRenderOrder(parseInt(value, 10));
                      handleInputChange();
                    }}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select Render Order" value="" />
                    {[1, 2, 3, 4, 5, 6].map((value) => (
                      <Picker.Item label={value.toString()} value={value.toString()} key={value.toString()} style={styles.pickerItem} />
                    ))}
                  </Picker>
                </View>
              </View>
            ) : (
              // BUTTONS AND LOADING SPINNER 
              <View style={styles.buttonContainer}>
                <View style={styles.iconContainer}>
                  <Pressable style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? '#bee0ec' : '#3ba1c5',
                      padding: 8,
                      borderColor: '#0690AC',
                      borderWidth: 2,
                      width: 300,
                      borderRadius: 8,
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginBottom: 8,
                    },
                  ]}
                    onPress={() => setIsCreatingFolder(true)}>
                    <View style={styles.buttonContent}>
                      <Text style={styles.buttonText}>Create New Folder</Text>
                      <Icon name="folder-plus" size={25} color="white" style={styles.icon} />
                    </View>
                  </Pressable>
                </View>
              </View>
            )}

            {isLoading ? (
              <LoadingSpinner loadingMessage={loadingMessage} />
            ) : (
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#C1E1C1' : isButtonDisabled ? '#D3D3D3' : '#00A36C',
                    padding: 8,
                    borderColor: isButtonDisabled ? 'gray' : '#008000',
                    borderWidth: 2,
                    width: 300,
                    borderRadius: 8,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginBottom: 8,
                    opacity: isButtonDisabled ? 0.5 : 1,
                  },
                ]}
                onPress={handleSavePart}
                disabled={isButtonDisabled}
              >
                <Text style={{ color: isButtonDisabled ? 'gray' : 'white', fontSize: 16 }}>
                  Save Part
                </Text>
              </Pressable>
            )}
            <CancelButton onClose={onClose} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddPartModal;
