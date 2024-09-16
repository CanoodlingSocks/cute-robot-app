import React, { useState, useEffect } from "react";
import { View, Text, Button, Modal, TextInput, ScrollView, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAvoidingView, Platform } from 'react-native';
import { getFolders, checkIfFolderExists } from "../../api/BlobStorageFetch";
import FolderSelection from "../Folders/FolderSelection";
import CreateNewFolder from "../Folders/CreateNewFolder";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { uploadImagesToFolder } from "../../api/BlobStorageFetch";
import { styles } from "./AddPartStyles"
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ViewsImageSelection from "./ViewsImageSelection";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddRobotModal = ({ isVisible, onClose }) => {

    //------------- USESTATES DATETIME PICKER ----------------------
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    //--------------- USESTATES FETCH DATA -------------------------
    const [modelName, setModelName] = useState<string>('');
    const [robotNickname, setRobotNickname] = useState<string>('');
    const [manufacturingDate, setManufacturingDate] = useState<Date>(new Date()); // Change the setSelectDate to this!
    const [description, setDescription] = useState<string>('');
    const [frontViewImage, setFrontViewImage] = useState<string>('');
    const [leftViewImage, setLeftViewImage] = useState<string>('');
    const [rightViewImage, setRightViewImage] = useState<string>('');
    const [backViewImage, setBackViewImage] = useState<string>('');

    // -------- SAVE PART BUTTON AND LOADING SPINNER ----------------
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');

    // ------------ USESTATES FOLDERS -------------------------------
    const [folders, setFolders] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState<string>('');
    const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
    const [folderAvailabilityMessage, setFolderAvailabilityMessage] = useState<string>('');
    const [folderName, setFolderName] = useState<string>('');

    // ------------ USESTATES VIEWS IMAGE SELECTION -------------------------------
    const [isFolderAvailabilityMessageVisible, setIsFolderAvailabilityMessageVisible] = useState(false);

    //----------------- DATETIME PICKER ----------------------------
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };
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
                    setIsFolderAvailabilityMessageVisible(false);
                }, 1000);
            } else {
                availabilityMessage = (
                    <Text style={styles.redText}>✘ Folder already exists.</Text>
                );
                setIsFolderAvailabilityMessageVisible(true);
            }

            setFolderAvailabilityMessage(availabilityMessage);
        } catch (error) {
            console.error('Error while checking folder availability:', error.message);
        }
    };

    //------------------ IMAGE PICKERS ----------------------------
    const handleChooseFrontViewImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setFrontViewImage(result.assets[0].uri);
            handleInputChange();
        }
    };

    const handleChooseLeftViewImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setLeftViewImage(result.assets[0].uri);
            handleInputChange();
        }
    };

    const handleChooseRightViewImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setRightViewImage(result.assets[0].uri);
            handleInputChange();
        }
    };

    const handleChooseBackViewImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setBackViewImage(result.assets[0].uri);
            handleInputChange();
        }
    };

    //-------------------- UPLOAD IMAGES AND SAVE PART ---------------------------

    const handleInputChange = () => {
        if (modelName && robotNickname && manufacturingDate && description && selectedFolder && frontViewImage && leftViewImage && rightViewImage && backViewImage) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    return (
        <Modal visible={isVisible} animationType="slide">
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalTitleContainer}>
                            <Text style={styles.modalTitle}>Add New Robot</Text>
                        </View>
                        {/* CONTENT                         */}
                        <TextInput
                            style={styles.inputField}
                            placeholder="Robot Model Name"
                            value={modelName}
                            onChangeText={(text) => {
                                setModelName(text);
                                handleInputChange();
                            }}
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Robot Nick Name"
                            value={robotNickname}
                            onChangeText={(text) => {
                                setRobotNickname(text);
                                handleInputChange();
                            }}
                        />
                        {/* DATETIME PICKER HERE */}
                        <View style={styles.buttonContainer}>
                            <Button title="Select Manufacturing Date" onPress={() => showDatePicker()} />
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleDateConfirm}
                            onCancel={hideDatePicker}
                        />

                        {/* DESCRIPTION INPUT  */}
                        <TextInput
                            style={styles.inputField}
                            placeholder="Description"
                            value={description}
                            onChangeText={(text) => {
                                setDescription(text);
                                handleInputChange();
                            }}
                            multiline
                        />
                        {/* IF FOLDER IS/ISN'T SELECTED */}
                        {selectedFolder ? (
                            <View style={styles.buttonContainer}>
                                <Text style={styles.selectedFolderText}>Selected Folder is: {selectedFolder}</Text>
                                <Button title="Choose another folder" onPress={() => setSelectedFolder('')} />
                            </View>
                        ) : null}
                        {isFolderAvailabilityMessageVisible ? (
                            <View style={styles.buttonContainer}>
                                <Text style={styles.selectedFolderText}>Selected Folder is: {selectedFolder}</Text>
                                {folderAvailabilityMessage}
                            </View>
                        ) : null}
                        {!selectedFolder ? (
                            <View>
                                <FolderSelection folders={folders} handleFolderClick={handleFolderClick} />
                                <View style={styles.buttonContainer}>
                                    <View style={styles.iconContainer}>
                                        <Pressable style={styles.button} onPress={() => setIsCreatingFolder(true)}>
                                            <View style={styles.buttonContent}>
                                                <Text style={styles.buttonText}>Create New Folder</Text>
                                                <Icon name="folder-plus" size={25} color="black" style={styles.icon} />
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>

                        ) : null}
                        {/* IF CREATING NEW FOLDER */}
                        {isCreatingFolder ? (
                            <CreateNewFolder
                                folderName={folderName}
                                setFolderName={setFolderName}
                                handleCheckFolderAvailability={handleCheckFolderAvailability}
                                folderAvailabilityMessage={folderAvailabilityMessage}
                            />
                        ) : null}
                        {/* VIEWS IMAGE SELECTION */}
                        {selectedFolder ? (
                            <ViewsImageSelection
                                handleChooseFrontViewImage={handleChooseFrontViewImage}
                                handleChooseLeftViewImage={handleChooseLeftViewImage}
                                handleChooseRightViewImage={handleChooseRightViewImage}
                                handleChooseBackViewImage={handleChooseBackViewImage}
                                frontViewImage={frontViewImage}
                                leftViewImage={leftViewImage}
                                rightViewImage={rightViewImage}
                                backViewImage={backViewImage}
                            />
                        ) : null}
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <View style={styles.buttonContainer}>
                                <Button title="Save Part" onPress={() => close} disabled={isButtonDisabled} />
                            </View>
                        )}
                        <View style={styles.buttonContainer}>
                            <Button title="Cancel" onPress={onClose} />
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default AddRobotModal;