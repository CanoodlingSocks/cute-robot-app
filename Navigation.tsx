import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Pressable, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useAdminMode } from './utils/AdminContext';
import HomeScreen from './components/screens/Home/HomeScreen';
import MyRobotsScreen from './components/screens/MyRobots/MyRobotsScreen';
import RobotInfoScreen from './components/screens/RobotInfo/RobotInfoScreen';
import NewsUpdatesScreen from './components/screens/NewsUpdates/NewsUpdatesScreen';
import SettingsScreen from './components/screens/Settings/Settings';
import AdminLayout from './components/screens/Admin/AdminLayout';
import LoginScreen from './components/screens/Login/login';
import ForgotPasswordScreen from './components/screens/ForgotPassword/ForgotPasswordScreen';
import RegisterScreen from './components/screens/Register/RegisterScreen';
import UserRobotDetailsScreen from './components/screens/UserRobotDetails/UserRobotDetailsScreen';
import InfoScreen from './components/screens/Info/InfoScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  const { isAdminMode, setIsAdminMode } = useAdminMode();

  const MainBottomTabNavigator = () => {
    const theme = useTheme();
    theme.colors.secondaryContainer = "#3bbdbb";

    return (
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        activeColor="#ffff"
        inactiveColor="lightgray"
        barStyle={{ backgroundColor: '#51a2ab' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: 'home',
          }}
        />
        <Tab.Screen
          name="My Robots"
          component={MyRobotsScreen}
          options={{
            title: 'My Robots',
            tabBarLabel: 'My Robots',
            tabBarIcon: 'robot',
          }}
        />
        <Tab.Screen
          name="News & Updates"
          component={NewsUpdatesScreen}
          options={{
            title: 'News & Updates',
            tabBarLabel: 'News & Updates',
            tabBarIcon: 'newspaper',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings',
            tabBarIcon: 'cog',
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5ca596',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {isAdminMode ? (
          <Stack.Screen
            name="Admin"
            component={AdminLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="Home"
              component={MainBottomTabNavigator}
              options={({ route }) => ({
                headerTitle: getFocusedRouteNameFromRoute(route) ?? 'Home',
                headerShown: getFocusedRouteNameFromRoute(route) === 'Home' ? false : true,
              })}
            />
            <Stack.Screen
              name="UserRobotDetails"
              component={UserRobotDetailsScreen}
              options={{
                title: 'Robot Details',
                headerStyle: {
                  backgroundColor: '#5ca596',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              />
                <Stack.Screen
              name="Info & Manuals"
              component={InfoScreen}
              options={{
                title: 'Info & Manuals',
                headerStyle: {
                  backgroundColor: '#5ca596',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              />
                <Stack.Screen
              name="Robot Info"
              component={RobotInfoScreen}
              options={{
                title: 'Robot Info',
                headerStyle: {
                  backgroundColor: '#5ca596',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            {isAdminMode && (
              <Pressable
                onPress={() => setIsAdminMode(false)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#51a2ab',
                  zIndex: 1,
                }}
              >
                <Text style={{ color: '#f1c268' }}>Exit Admin Mode</Text>
              </Pressable>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;