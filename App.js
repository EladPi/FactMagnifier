import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import { RootStackNavigator } from './src/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { registerForPushNotificationsAsync } from './src/Utils/registerForPushNotification';
import { useEffect, useState, useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen";


export default function App() {
  const [appIsReady , setAppIsReady] = useState(false);

  useEffect(() => {
    if(appIsReady){
      registerForPushNotificationsAsync();
    }
  }, [appIsReady])

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        const timeoutId = setTimeout(async () => {
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }, 3000);
  
        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
      } catch (error) {
        // Handle errors during splash screen manipulation
        console.error('Error while preparing splash screen:', error);
      }
    }
  
    prepare();
  }, []);


  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


