import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import { emailValidator } from '../../core/Utils';
import Header from '../../header/Header';
import TextInput from '../../TextInput';
import Button from '../../Button/Button';
import { Logo } from '../../Logo';
import RegBackground from '../Register/style';
import {styles} from './style'

type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.push('Login');
  };

  return (
    <RegBackground>
      <Logo />
      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button label="Send Reset Instructions" onPress={_onSendPressed} />

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.label}>Back to login</Text>
      </TouchableOpacity>
    </RegBackground>
  );
};

export default ForgotPasswordScreen;