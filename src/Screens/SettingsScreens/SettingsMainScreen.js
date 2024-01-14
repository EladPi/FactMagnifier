import { View, StyleSheet, SafeAreaView } from "react-native";
import SettingsScreenButtons from "../../Components/SettingsScreenButtons";

const SettingsMainScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.secondaryContainer}>
                    <SettingsScreenButtons text={'Notifications'} navTo={'SettingsNotificationsScreen'} />
                    <SettingsScreenButtons text={'Terms and Conditions'} navTo={'SettingsLicenseScreen'} />
                    <SettingsScreenButtons text={'Contact'} navTo={'SettingsContactScreen'} />
                    <SettingsScreenButtons text={'Privacy Policy'} navTo={'SettingsPrivacyScreen'} />
                    <SettingsScreenButtons text={'About'} navTo={'SettingsAboutScreen'} />
                </View>
            </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
    secondaryContainer: {
        borderRadius: 1,
        borderRadius: 10,
        height: '98%',
        marginBottom: 30,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
})

export default SettingsMainScreen;