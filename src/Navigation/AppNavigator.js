import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import HomeScreen from '../Screens/HomeScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import SavedScreen from '../Screens/SavedScreen';
import SettingsMainScreen from '../Screens/SettingsScreens/SettingsMainScreen';
import SettingsNotificationsScreen from '../Screens/SettingsScreens/SettingsNotificationsScreen';
import NotificationFactScreen from '../Screens/NotificationFactScreen';
import SettingsContactScreen from '../Screens/SettingsScreens/SettingsContactScreen';
import SettingsAboutScreen from '../Screens/SettingsScreens/SettingsAboutScreen';
import SettingsLicenseScreen from '../Screens/SettingsScreens/SettingsLicenseScreen';
import SettingsPrivacyScreen from '../Screens/SettingsScreens/SettingsPrivacyScreen';

//icons for navigation
import homeIcon from '../Assets/lamp.png';
import categoriesIcon from '../Assets/categories.png';
import favoritesIcon from '../Assets/favorites.png';
import settingsIcon from '../Assets/settings.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();


function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName='MainScreen'>
      <Stack.Screen name="MainScreen" component={SettingsMainScreen} options={{ headerShown: false, headerTitle: 'Settings' }} />
      <Stack.Screen name="SettingsNotificationsScreen" component={SettingsNotificationsScreen} options={{ headerTransparent: true, headerTitle: 'Notifications' }} />
      <Stack.Screen name="SettingsLicenseScreen" component={SettingsLicenseScreen} options={{ headerTransparent: true, headerTitle: 'Terms and Conditions' }} />
      <Stack.Screen name="SettingsContactScreen" component={SettingsContactScreen} options={{ headerTransparent: true, headerTitle: 'Contact' }} />
      <Stack.Screen name="SettingsPrivacyScreen" component={SettingsPrivacyScreen} options={{ headerTransparent: true, headerTitle: 'Privacy Policy' }} />
      <Stack.Screen name="SettingsAboutScreen" component={SettingsAboutScreen} options={{ headerTransparent: true, headerTitle: 'About' }} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Facts"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 90,
          backgroundColor: 'aliceblue',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Facts"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={homeIcon}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Image
              source={categoriesIcon}
              style={{
                width: size,
                height: size,
                tintColor: undefined
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Image
              source={favoritesIcon}
              style={{
                width: size,
                height: size,
                tintColor: undefined,
              }}
            />
          ),
        }
        }
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ size }) => (
            <Image
              source={settingsIcon}
              style={{
                width: size,
                height: size,
                tintColor: undefined
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={AppNavigator} />
      <RootStack.Screen name="NotificationScreen" component={NotificationFactScreen} />
    </RootStack.Navigator>
  );
}
