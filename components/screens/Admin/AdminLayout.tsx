import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import RobotPanel from './RobotPanel';
import { useTheme } from 'react-native-paper';
import { useAdminMode } from '../../../utils/AdminContext';


const Tab = createMaterialBottomTabNavigator();

const NewsPanel = () => {
  return (
    <View style={styles.panelContainer}>
      <Text>News & Updates Panel Content</Text>
    </View>
  );
};

const AdminLayout = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "#3bbdbb";
  const { setIsAdminMode } = useAdminMode();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin</Text>
        <Pressable
          onPress={() => setIsAdminMode(false)}
          style={styles.exitButton}
        >
          <Text style={{ color: '#f1c268' }}>Exit Admin Mode</Text>
        </Pressable>
      </View>
      <Tab.Navigator
        initialRouteName="Robot Panel"
        shifting={true}
        activeColor="#f1c268"
        inactiveColor="#3bbdbb"
        barStyle={{ backgroundColor: '#51a2ab' }}
        >
        <Tab.Screen
          name="Robot Panel"
          component={RobotPanel}
          options={{
            tabBarLabel: 'Robot Panel',
            tabBarAccessibilityLabel: 'Robot Panel',
            tabBarIcon: 'robot',
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarAccessibilityLabel: 'Home',
            tabBarIcon: 'home',
          }}
        />
        <Tab.Screen
          name="News Panel"
          component={NewsPanel}
          options={{
            tabBarLabel: 'News Panel',
            tabBarIcon: 'newspaper', 
            tabBarAccessibilityLabel: 'News Panel',
            tabBarColor:  '#f1c268',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#51a2ab',
    marginTop: 30,
    elevation: 6, 
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderBottomColor: '#3f7267',
    borderWidth: 0.5,
  },
  headerTitle: {
    fontSize: 20,
    color: '#f1c268',
    marginLeft: 16,
    fontWeight: '600',
  },
  panelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    padding: 8,
    paddingTop: 10,
    marginLeft: 45,
  },
});

export default AdminLayout;
