import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import { RootStackNavigator } from './src/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { registerForPushNotificationsAsync } from './src/Utils/registerForPushNotification';
import { useEffect } from 'react';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://114b9c1f824c5f340983d25d8af9dc85@o4506570133209088.ingest.sentry.io/4506570134454272',
  enableInExpoDevelopment: false,
  debug: true, // Consider setting this to false in production
});

Sentry.Native.captureException(new Error("Sentry Test Error number 2!"));



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


