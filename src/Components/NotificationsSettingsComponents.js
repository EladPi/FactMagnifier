import { useEffect, useState } from 'react';
import { View, Switch, Text, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Linking } from 'react-native';

const NotificationsSettingsComponents = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () =>{
         setIsEnabled(previousState => !previousState);
         createAlert();
        };

    const createAlert = () =>
        Alert.alert('Allow Notifications', 'Please go to  your phones settings in order to enable or disable notifications.', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            {
                text: 'Go To Settings',
                onPress: () => Linking.openSettings(),
                style: 'cancel',
            },
        ]);

    async function checkNotificationStatus() {
        const settings = await Notifications.getPermissionsAsync();
        if (!settings.granted) {
            setIsEnabled(false);
        }
        else {
            setIsEnabled(true);
        }
    }

    useEffect(()=>{
        checkNotificationStatus();
    },[]);

    

    return (
        <>
            <View style={styles.container}>
                <View style={styles.textAndSwitchContainer}>
                    <Text style={styles.text}>Allow Push Notifications</Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View>
                    <Text style={styles.explanationText}>
                        By allowing to recieve push notifications, you will recieve notifications about some interesting facts to brew your brain during the day!
                    </Text>
                    <Text style={styles.explanationText}>
                        Don't worry, you can disable it anytime.
                    </Text>
                </View>
            </View>

        </>
    );
};



const styles = StyleSheet.create({
    container: {
        height: '90%',
        width: '90%',
        marginTop: '15%',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    textAndSwitchContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pickerContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20
    },
    explanationText: {

    },
    messageContainer: {
        position: 'absolute',
        top: '50%',
        alignItems: 'center',
        width: '70%',
        borderWidth: 1,
        padding: 30,
        borderRadius: 18,


    },
})



export default NotificationsSettingsComponents;
