import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './style'
import { getUserRole } from '../../../utils/UserRoleUtils';
import { useAdminMode } from '../../../utils/AdminContext';

const SettingsScreen = () => {
    const [userRole, setUserRole] = useState<string | null>(null);
    const { isAdminMode, setIsAdminMode } = useAdminMode();

    useEffect(() => {
        async function fetchUserRole() {
            const role = await getUserRole();
            if (role) {
                setUserRole(role);
            }
        }

        fetchUserRole();
    }, []);

    return (
        <View style={styles.container}>

            {userRole === 'Admin' && (
                <Pressable
                    onPress={() => {
                    console.log('Admin button pressed');
                    setIsAdminMode(true);
                    }}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Enter Admin Mode</Text>
                </Pressable>
            )}
        </View>
    );
};

export default SettingsScreen;
