import * as SecureStore from 'expo-secure-store';

export async function setUserNickname(userNickname: string): Promise<void> {
    try {
      await SecureStore.setItemAsync('userNickname', userNickname);
    } catch (error) {
      console.error('Error setting userNickname:', error);
    }
  }

export async function getUserNickname(): Promise<string | null> {
    try {
      const userNickname = await SecureStore.getItemAsync('userNickname');
      return userNickname;
    } catch (error) {
      console.error('Error getting userNickname:', error);
      return null;
    }
  }
  
  export async function removeUserNickname(): Promise<void> {
    try {
      await SecureStore.deleteItemAsync('userNickname');
    } catch (error) {
      console.error('Error removing userNickname:', error);
    }
  }