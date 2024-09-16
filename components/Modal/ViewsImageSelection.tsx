import React from 'react';
import { View, Button, Image } from 'react-native';
import { styles } from './AddPartStyles';

const ViewsImageSelection = ({
    handleChooseFrontViewImage,
    handleChooseLeftViewImage,
    handleChooseRightViewImage,
    handleChooseBackViewImage,
    frontViewImage,
    leftViewImage,
    rightViewImage,
    backViewImage,
}) => {
    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button title="Choose Front View Image" onPress={handleChooseFrontViewImage} />
            </View>
            {frontViewImage && <Image source={{ uri: frontViewImage }} style={styles.selectedImage} />}
            <View style={styles.buttonContainer}>
                <Button title="Choose Left View Image" onPress={handleChooseLeftViewImage} />
            </View>
            {leftViewImage && <Image source={{ uri: leftViewImage }} style={styles.selectedImage} />}
            <View style={styles.buttonContainer}>
                <Button title="Choose Right View Image" onPress={handleChooseRightViewImage} />
            </View>
            {rightViewImage && <Image source={{ uri: rightViewImage }} style={styles.selectedImage} />}
            <View style={styles.buttonContainer}>
                <Button title="Choose Back View Image" onPress={handleChooseBackViewImage} />
            </View>
            {backViewImage && <Image source={{ uri: backViewImage }} style={styles.selectedImage} />}
        </View>
    );
};

export default ViewsImageSelection;