import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import instance from '../../api/BaseUrl';

interface EditNicknameModalProps {
  visible: boolean;
  uniqueRobotCode: string;
  oldNickname: string;
  onClose: () => void;
  onNicknameChange: (newNickname: string) => void;
  onModalClose: () => void; //Force re-render?
}

const EditNicknameModal: React.FC<EditNicknameModalProps> = ({
  visible,
  uniqueRobotCode,
  oldNickname,
  onClose,
  onNicknameChange,
  onModalClose, 
}) => {
  const [newNickname, setNewNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  const handleSave = async () => {
    try {
      if (!uniqueRobotCode) {
        console.error('UniqueRobotCode is missing.');
        return;
      }

      const response = await fetch(`${instance}/api/Robot`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uniqueRobotCode, newNickname }),
      });

      if (response.ok) {
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          setNewNickname(newNickname);
          onNicknameChange(newNickname);
          onClose();
          onModalClose();
        } else {
          console.log('Non-JSON response:', await response.text());
          onClose();
        }
      } else {
        const errorData = await response.json();
        console.error('Error updating nickname:', errorData);
        setNicknameError(errorData.message || 'Nickname change failed');
      }
    } catch (error) {
      console.error('Error updating nickname:', error);
      setNicknameError('An unexpected error occurred');
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Nickname</Text>
            <Text style={[styles.modalSubtitle, styles.boldDarkGreen]}>Current Nickname:</Text>
            <Text style={styles.oldNickname}>{oldNickname}</Text>
            <Text style={[styles.modalSubtitle, styles.boldDarkGreen]}>New Nickname:</Text>
            <TextInput
              style={styles.input}
              value={newNickname}
              onChangeText={(text) => {
                setNewNickname(text);
                setNicknameError('');
              }}
              maxLength={10}
            />
            {nicknameError.length > 0 && <Text style={styles.errorText}>{nicknameError}</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onClose}>
                <View style={[styles.button, styles.cancelButton]}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave}>
                <View style={[styles.button, styles.saveButton]}>
                  <Text style={styles.buttonText}>Save</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
      alignItems: 'center',
    width: 350,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  oldNickname: {
    fontSize: 16,
      marginBottom: 10,
      fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  saveButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    boldDarkGreen: {
        color: 'darkgreen',
        fontWeight: 'bold',
      },
});

export default EditNicknameModal;
