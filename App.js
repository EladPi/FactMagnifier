import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import { RootStackNavigator } from './src/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { registerForPushNotificationsAsync } from './src/Utils/registerForPushNotification';
import { useEffect } from 'react';


export default function App() {

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, [])

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


