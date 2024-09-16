import * as SecureStore from 'expo-secure-store';

export async function setAuthToken(token: string): Promise<void> {
  try {
    await SecureStore.setItemAsync('token', token);
  } catch (error) {
    console.error('Error setting token:', error);
  }
}

export async function getAuthToken(): Promise<string | null> {
  try {
    const token = await SecureStore.getItemAsync('token');
    return token;
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
}

export async function removeAuthToken(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync('token');
  } catch (error) {
    console.error('Error removing token:', error);
  }
}
