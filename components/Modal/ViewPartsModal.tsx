import React, { useState, useEffect } from 'react';
import { View, Text, Modal, FlatList, Pressable, Image, StyleSheet } from 'react-native';
import { getParts, deletePart } from '../../api/AdminFetch';
import ConfirmationModal from './ConfirmationModal';
import AdminFilterButton from '../Filter/AdminFilterButtons';

type FilterOptions = {
    type: string;
    sortBy: string;
    searchKeyword: string;
  };

const ViewPartsModal = ({ isVisible, onClose }) => {
    const [selectedPart, setSelectedPart] = useState(null);
    const [partsData, setPartsData] = useState([]);
    const [isDeleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
    const [isDeletePressed, setDeletePressed] = useState(false);
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({
        type: 'All',
        sortBy: 'Part Name',
        searchKeyword: '',
      });

    useEffect(() => {
        if (isVisible) {
            fetchParts(filterOptions);
        }
    }, [isVisible, filterOptions]);

    const fetchParts = async (filterOptions) => {
        try {
            const parts = await getParts(filterOptions);
            setPartsData(parts);
        } catch (error) {
            console.error('Error fetching parts: ', error);
        }
    };

    const handleFilterChange = (filterType, value) => {
        setFilterOptions({ ...filterOptions, [filterType]: value });
    };

    const handleSelectPart = (part) => {
        setSelectedPart(part);
    };

    const handleCloseModal = () => {
        setSelectedPart(null);
        onClose();
    };

    const handleDeletePart = () => {
        if (selectedPart) {
            setDeletePressed(true);
            setDeleteConfirmationVisible(true);
        }
    };

    const handleCancelDelete = () => {
        setDeletePressed(false);
        setDeleteConfirmationVisible(false);
    };

    const handleClosePartDetails = () => {
        setSelectedPart(null);
    };

    const handleConfirmDelete = async () => {
        if (selectedPart) {
            const { id } = selectedPart;
            const deleted = await deletePart(id);

            if (deleted) {
                const filterOptions = { filterType: 'All', sortBy: 'Part Name', searchKeyword: '' };
                getParts(filterOptions)
                    .then((parts) => {
                        setPartsData(parts);
                    })
                    .catch((error) => {
                        console.error('Error fetching parts:', error);
                    });
            } else {
                console.error('There was an error');
            }

            setDeletePressed(false);
            setDeleteConfirmationVisible(false);
            setSelectedPart(null);
        }
    };

    return (
        <Modal animationType="slide" transparent={false} visible={isVisible}>
            <View style={styles.modalContainer}>
                {selectedPart ? null : (
                    <>
                        <View style={styles.modalTitleContainer}>
                            <Text style={styles.modalHeader}>Filter Parts</Text>
                        </View>
                        <View style={styles.filterContainer}>
                            <AdminFilterButton
                                label="All"
                                active={filterOptions.type === 'All'}
                                onPress={() => handleFilterChange('type', 'All')}
                            />
                            <AdminFilterButton
                                label="Type 1"
                                active={filterOptions.type === 'Part Name'}
                                onPress={() => handleFilterChange('sortBy', 'Part Name')}
                            />
                            <AdminFilterButton
                                label="Type 2"
                                active={filterOptions.type === 'Search'}
                                onPress={() => handleFilterChange('searchKeyWord', '')}
                            />
                        </View>
                    </>
                )}
                {selectedPart ? (
                    <View style={styles.partListContainer}>
                        <FlatList
                            data={partsData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item, index }) => (
                                <Pressable
                                    style={[
                                        styles.partListItem,
                                        selectedPart && selectedPart.id === item.id && styles.selectedPart,
                                        index % 2 === 0 && { backgroundColor: '#afebe5' },
                                    ]}
                                    onPress={() => handleSelectPart(item)}
                                >
                                    <Text style={styles.partName}>{item.partName}</Text>
                                    <Text style={styles.partType}>{item.type}</Text>
                                </Pressable>
                            )}
                        />
                        <View style={styles.partDetailsContainer}>
                            <Text style={[styles.partDetailTitle, styles.centeredText]}>Part Details</Text>
                            <View style={styles.detailsBox}>
                                <Text style={styles.partDetailText}>Part Name: {selectedPart.partName}</Text>
                                <Text style={styles.partDetailText}>Description: {selectedPart.description}</Text>
                                <Text style={styles.partDetailText}>Type: {selectedPart.type}</Text>
                                <Text style={styles.partDetailText}>Render Order: {selectedPart.order}</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Text style={styles.imageName}>Close-up Image</Text>
                                <Image source={{ uri: selectedPart.closeUpImage }} style={styles.image} />
                            </View>
                            <View style={styles.imageContainer}>
                                <Text style={styles.imageName}>Part Image</Text>
                                <Image source={{ uri: selectedPart.partImage }} style={styles.image} />
                            </View>
                            <View style={styles.buttonRow}>
                                <Pressable style={styles.closeButton} onPress={handleClosePartDetails}>
                                    <Text style={[styles.buttonText, styles.centeredText]}>Close</Text>
                                </Pressable>
                                <Pressable style={styles.deleteButton} onPress={handleDeletePart}>
                                    <Text style={styles.buttonText}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                ) : (
                    <FlatList
                        data={partsData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <Pressable
                                style={[
                                    styles.partListItem,
                                    selectedPart && selectedPart.id === item.id && styles.selectedPart,
                                    index % 2 === 0 && { backgroundColor: '#afebe5' },
                                ]}
                                onPress={() => handleSelectPart(item)}
                            >
                                <Text style={styles.partName}>{item.partName}</Text>
                                <Text style={styles.partType}>{item.type}</Text>
                            </Pressable>
                        )}
                    />
                )}
                <ConfirmationModal
                    isVisible={isDeleteConfirmationVisible}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
                {selectedPart ? null : (
                    <Pressable style={styles.closeButton} onPress={handleCloseModal}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </Pressable>
                )}
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalHeader: {
        fontSize: 24,
        marginBottom: 16,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    modalTitleContainer: {
        backgroundColor: '#00baad',
        marginBottom: 15,
        paddingTop: 15,
        width: '100%',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        margin: 8,
    },
    filter: {
        color: 'black',
        padding: 8,
    },
    activeFilter: {
        color: 'blue',
        padding: 8,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmationWrapper: {
        height: 220,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    partListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
    },
    centeredText: {
        textAlign: 'center',
    },
    selectedPart: {
        backgroundColor: 'lightgray',
    },
    partName: {
        fontSize: 16,
    },
    partType: {
        fontSize: 16,
    },
    partListContainer: {
        flex: 1,
    },
    partDetailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 12,
        margin: 16,
        borderRadius: 10,
        width: 150,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: 'blue',
        padding: 12,
        margin: 16,
        borderRadius: 10,
        width: 150,
    },
    closeButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    confirmationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    confirmationButton: {
        padding: 12,
        margin: 16,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: 'blue',
    },
    yesDeleteButton: {
        backgroundColor: 'red',
    },
    buttonTextWhite: {
        color: 'white',
        fontSize: 16,
    },
    centeredDetails: {
        alignItems: 'center',
    },
    detailsBox: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        marginBottom: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    partDetailTitle: {
        fontSize: 20,
        marginBottom: 16,
    },
    partDetailText: {
        fontSize: 16,
        marginBottom: 8,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    imageContainer: {
        alignItems: 'center',
    },
    imageName: {
        fontSize: 16,
        marginBottom: 8,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 60,
    },
});

export default ViewPartsModal;
