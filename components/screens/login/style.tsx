import React, { memo } from 'react';
import { theme } from '../../core/Theme';
import {
    ImageBackground,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';

type Props = {
    children: React.ReactNode;
};

const Background = ({ children }: Props) => {
    return (
        <ImageBackground
            source={require('../../../assets/yllwbg.png')}
            resizeMode='cover'
            style={styles.background}
        >
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                {children}
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingBottom: 10,
      },
      rememberMeCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkbox: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderRadius: 3,
          marginRight: 8,
        
      },
      checkboxUnchecked: {
        borderColor: 'gray',
      },
      checkboxChecked: {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary,
      },
      rememberMeText: {
        color: 'white',
      },
      forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 14,
      },
      row: {
        flexDirection: 'row',
        marginTop: 4,
      },
      label: {
        color: theme.colors.secondary,
      },
      link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
      logoContainer: {
        width: 200,
        height: 150,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });


export default memo(Background);
