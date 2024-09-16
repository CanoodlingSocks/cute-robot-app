// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import Button from '../button/Button';
// import partsData from '../core/partsData.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft, faChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import GeneratePartImagePaths from './partImagePaths';

// type PartDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'PartDetails'>;

// const PartDetailsScreen = ({ route }: PartDetailsScreenProps) => {
//     const { partName = '', robotInfo } = route.params || {};
//     const [showCompatiblePartsModal, setShowCompatiblePartsModal] = useState<boolean>(false);

//     //Store the part to update image in DetailScreen
//     const [selectedPart, setSelectedPart] = useState<string>('');

//     const handleCloseModal = () => {
//         setShowCompatiblePartsModal(false);
//     };

//     //Modal - Current part shown
//     const [currentPartIndex, setCurrentPartIndex] = useState<number>(0);

//     const initialPartData = partsData.find(part => part.name === partName);
//     const initialPartName = initialPartData?.imageName || '_Standard_RightArm.svg';

//     const currentPart = partsData[currentPartIndex];
//     const currentPartImageFileName = `${currentPart.imageName}`;
//     const partImages = GeneratePartImagePaths(robotInfo?.model || ''); // Generate part image paths

    
//     const currentPartImagePaths = GeneratePartImagePaths(robotInfo?.model || '');
   
//     const compatibleParts = partsData.filter(part => part.name !== partName);

//     const handleSwapPart = () => {
//         setSelectedPart(currentPart.imageName);
//     };

//     const handlePrevPart = () => {
//         setCurrentPartIndex(prevIndex => (prevIndex === 0 ? compatibleParts.length - 1 : prevIndex - 1));
//     };

//     const handleNextPart = () => {
//         setCurrentPartIndex(prevIndex => (prevIndex === compatibleParts.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <View style={styles.container}>
//             <Text>{partName}</Text>
           
//             <Image source={currentPartImagePaths[partName]?.image1} style={styles.image} />

//             <Button label="View Compatible Parts" onPress={() => setShowCompatiblePartsModal(true)} />

//             <Modal visible={showCompatiblePartsModal} transparent={true} animationType="slide">
//                 <View style={styles.modalContainer}>
//                 <TouchableOpacity onPress={handleCloseModal}>
//                             <FontAwesomeIcon icon={faCircleXmark} style={styles.icon} />
//                         </TouchableOpacity>
//                     <View style={styles.partImageContainer}>
//                         <Image source={require(`../../assets/${robotInfo?.model}/${currentPartImageFileName}`)} style={styles.partImage} />
//                     </View>
//                     <View style={styles.partInfoContainer}>
//                         <Text style={styles.partInfoText}>{currentPart.infoText}</Text>
//                     </View>
//                     <View style={styles.iconContainer}>
//                         <TouchableOpacity onPress={handlePrevPart}>
//                             <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} />
//                         </TouchableOpacity>
//                         <Button label="SWAP PART" onPress={handleSwapPart} disabled={initialPartName === currentPart.imageName} />
//                         <TouchableOpacity onPress={handleNextPart}>
//                             <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     partName: {
//         fontSize: 20,
//         marginBottom: 10,
//     },
//     button: {
//         backgroundColor: '#3498db',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//         marginBottom: 20,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     modalTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     image: {
//         width: 500,
//         height: 200,
//         marginBottom: 10,
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     partImage: {
//         width: 400,
//         height: 200,
//         marginBottom: 20,
//     },
//     partImageContainer: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     iconContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '80%',
//         padding: 20,
//     },
//     icon: {
//         fontSize: 24,
//         color: '#3498db',
//     },
//     partInfoContainer: {
//         padding: 10,
//     },
//     partInfoText: {
//         textAlign: 'center',
//     },
// });

// export default PartDetailsScreen;