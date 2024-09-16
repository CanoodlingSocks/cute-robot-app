import React, { useState } from 'react';
import RegBackground from './style'
import { Logo } from '../../Logo';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../header/Header';
import Button from '../../Button/Button';
import TextInput from '../../TextInput';
import { theme } from '../../core/Theme'; 
import {
    emailValidator,
    passwordValidator,
    usernameValidator
} from '../../core/Utils';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
    const [username, setUsername] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });

    const _onSignUpPressed = () => {
        const usernameError = usernameValidator(username.value);
        const passwordError = passwordValidator(password.value);
        const emailError = emailValidator(email.value);

        if (emailError || passwordError || usernameError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            setUsername({ ...username, error: usernameError });
            return;
        }

        navigation.navigate('Home');
    };

    return (
        <RegBackground>
            <Logo />
            <Header>Create Account</Header>
            
            <TextInput
                label="Username"
                returnKeyType="next"
                value={username.value}
                onChangeText={text => setUsername({ value: text, error: '' })}
                error={!!username.error}
                errorText={username.error}
            />
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <Button label="Sign Up" onPress={_onSignUpPressed} style={styles.button} />

            <View style={styles.row}>
                <Text style={styles.label}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
            </View>
        </RegBackground>
    );
};

const styles = StyleSheet.create({
    label: {
        color: theme.colors.secondary,
    },
    button: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

export default RegisterScreen;