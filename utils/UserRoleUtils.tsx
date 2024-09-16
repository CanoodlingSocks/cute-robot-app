import * as SecureStore from 'expo-secure-store';

export async function setUserRole(userRole: string): Promise<void> {
    try {
      await SecureStore.setItemAsync('userRole', userRole);
    } catch (error) {
      console.error('Error setting userRole:', error);
    }
  }

export async function getUserRole(): Promise<string | null> {
    try {
      const userRole = await SecureStore.getItemAsync('userRole');
      return userRole;
    } catch (error) {
      console.error('Error getting userRole:', error);
      return null;
    }
  }
  
  export async function removeUserRole(): Promise<void> {
    try {
      await SecureStore.deleteItemAsync('userRole');
    } catch (error) {
      console.error('Error removing userRole:', error);
    }
  }