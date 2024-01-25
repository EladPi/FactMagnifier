import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

export async function registerForPushNotificationsAsync() {
  let token;
  let deviceName;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    deviceName= Device.deviceName;
  }
  return await sendTokenToServer(token.data, deviceName);
}



async function sendTokenToServer(token, deviceName) {
  try {
    const response = await fetch('https://europe-west1-factsapp-cbc6a.cloudfunctions.net/registerPushToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, deviceName }),
    });
  } catch (error) {
    console.error('Error on sendTokenToServer:', error);
  }
}

