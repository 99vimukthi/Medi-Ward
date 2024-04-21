
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text ,Button} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import useAuth from '../hooks/useAuth';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LeaveForm from '../screens/LeaveForm';
import { themeColors } from '../theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import NewsScreen from '../screens/NewsScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: themeColors.bg },
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Welcome") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "settings";
          } else if (route.name === "Profile") {
            iconName = "person-circle-outline";
          } else if (route.name === "Details") {
            iconName = "book";
          }else if(route.name==="Leave"){
            iconName ="calendar" ;
          }
          const customizeSize = 30
          return <Ionicons
            name={iconName}
            size={customizeSize}
            color={focused ? "#e1fdd5" : "#001e3b"}
          />;
        },
      })}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Leave" component={LeaveForm} />
    </Tab.Navigator>
  )
}

export default function AppNavigation() {
  const { user } = useAuth();

  return (
    <NavigationContainer
    drawerStyle={{
      backgroundColor: '0077b6', // Change this to your desired color
      width: 240,
    }}
    >
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={user ? HomeTabs : AuthStack} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
        <Drawer.Screen name="Leave" component={LeaveForm} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const AuthStack = () => {
  return (

      <Stack.Navigator
      
      >
        
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

      </Stack.Navigator>

  );
};
