import * as SecureStore from 'expo-secure-store';

export const getUserIdFromSecureStore = async () => {
    try {
        const userId = await SecureStore.getItemAsync('userId')
        if (userId) {
            return parseInt(userId);
        } else {
            return null;
        }
    }
    catch {
        return null;
    }
}










