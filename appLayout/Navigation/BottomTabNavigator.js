import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../Screens/HomeScreen';
import BillsScreen from '../Screens/BillsScreen'; // reuse inside sheet
import ProfileScreen from '../Screens/ProfileScreen';
import UploadScreen from '../Screens/UploadScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false, // Hides default headers
          tabBarActiveTintColor: 'rgb(63 98 137)',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {

              case 'Home':
                iconName = 'home';
                break;
              case 'Bills':
                iconName = 'file-text';
                break;
              case 'Upload':
                iconName = 'camera';
                break;
              case 'Profile':
                iconName = 'user-circle';
                break;
              default:
                iconName = 'ellipse';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Bills"
          component={BillsScreen}
        />
        <Tab.Screen name='Upload' component={UploadScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
}
