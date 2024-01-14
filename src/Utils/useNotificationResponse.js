import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native';

export default function useNotificationResponse() {
    const nav = useNavigation();

    useEffect(() => {
        const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
            const fact = response.notification.request.content.data;
            if(fact){
                nav.navigate('NotificationScreen', { fact });
            }
            else{
                nav.navigate('Facts');
            }
        });

        // Clean up listeners upon unmounting
        return () => {
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);
}