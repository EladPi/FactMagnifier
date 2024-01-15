import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';


export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      //projectId: Constants.expoConfig.expoConfig.extra.eas.projectId,
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return await sendTokenToServer(token.data);
}



async function sendTokenToServer(token) {
  try {
    const response = await fetch('https://europe-west1-factsapp-cbc6a.cloudfunctions.net/registerPushToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.text();
  } catch (error) {
    console.error('Error on sendTokenToServer:', error);
  }
}





/*
      projectId: Constants.expoConfig.extra.eas.projectId,

*/
