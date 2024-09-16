import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Background from './style';
import Header from '../../header/Header';
import Button from '../../Button/Button';
import TextInput from '../../TextInput';
import { passwordValidator, usernameValidator } from '../../core/Utils';
import WinkingLogo from '../../../assets/WinkingLogo';
import { fetchLogin } from '../../../api/LoginFetch';
import * as SecureStore from 'expo-secure-store';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { setUserRole } from '../../../utils/UserRoleUtils';
import { styles } from './style';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useEffect(() => {
    const loadSavedCredentials = async () => {
      const savedUsername = await SecureStore.getItemAsync('username');
      const savedPassword = await SecureStore.getItemAsync('password');
      if (savedUsername && savedPassword) {
        setUsername({ value: savedUsername, error: '' });
        setPassword({ value: savedPassword, error: '' });
        setRememberMe(true);
      }
    };

    loadSavedCredentials();
  }, []);

  const handleLoginPressed = async () => {
    setShowSpinner(true);
    const usernameError = usernameValidator(username.value);
    const passwordError = passwordValidator(password.value);

    if (usernameError || passwordError) {
      setShowSpinner(false);
      setUsername({ ...username, error: usernameError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      const response = await fetchLogin({ Username: username.value, Password: password.value });
      if (response && response.status === 200) {
        //-------------- SecureStore ------------------
        const userId = response.data.user.id;
        const userRole = response.data.user.role;
        await SecureStore.setItemAsync('userId', userId.toString());
        await SecureStore.setItemAsync('userRole', userRole);
        setUserRole(userRole);
        //---------------------------------------------

        if (rememberMe) {
          await SecureStore.setItemAsync('username', username.value);
          await SecureStore.setItemAsync('password', password.value);
        } else {
          await SecureStore.deleteItemAsync('username');
          await SecureStore.deleteItemAsync('password');
        }

        setShowSpinner(false);

        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        setShowSpinner(false);
        setUsername({ ...username, error: 'Invalid username or password' });
        setPassword({ ...password, error: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Login failed:', error);
      setShowSpinner(false);
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Background>
      <View style={styles.logoContainer}>
        <WinkingLogo />
      </View>
      <Header>Welcome back</Header>

      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
        textContentType="username"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.rememberMeContainer}>
        <TouchableOpacity
          style={styles.rememberMeCheckbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View
            style={[
              styles.checkbox,
              rememberMe ? styles.checkboxChecked : styles.checkboxUnchecked,
            ]}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.label}>Forgot your password?</Text>
      </TouchableOpacity>

      {showSpinner && <LoadingSpinner visible={true} size="large" color="#FF5733" />}

      <Button label="Login" onPress={handleLoginPressed} />

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default LoginScreen;



