import { Text, StyleSheet, SafeAreaView, TouchableOpacity,ScrollView } from "react-native";
import { openURL } from "../../Utils/openURL";

const SettingsPrivacyScreen = ({ navigation }) => {
    const firebaseUrl = 'https://firebase.google.com/support/privacy';
    const email = 'mailto:mindbrew.app@gmail.com'

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subContainer} contentContainerStyle={{ paddingBottom: 20 }}>
                <Text style={{fontSize:18, fontWeight:'bold', marginBottom:15}}>Last updated: 15/1/2024</Text>

                <Text>
                    At FactMagnifier, one of our main priorities is the privacy of our users. This Privacy Policy document contains types of information that is collected and recorded by FactMagnifier and how we use it.
                </Text>

                <Text style={styles.title}>1. Information Collection and Use:</Text>
                <Text>
                    For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your device's push token.
                    The information that we request will be retained by us and used as described in this privacy policy. The app does use third-party services that may collect information used to identify you.
                </Text>

                <Text style={styles.title}>Push Tokens and device's name:</Text>
                <Text>
                    We collect your device's push token and name solely for the purpose of sending notifications about new facts or updates directly to your device. This service is optional and can be turned off at any time through your phone's settings.
                </Text>

                <Text style={styles.title}>2. Data Storage and Security:</Text>
                <Text>
                    The push tokens are securely stored in a Firebase database and are not accessible to anyone. They are used exclusively for delivering notifications pertinent to FactMagnifier.
                    For more information, you can read Google's <TouchableOpacity style={styles.buttons} onPress={()=> openURL(firebaseUrl)}><Text style={styles.buttonText}>Firebase privacy policy</Text></TouchableOpacity>.
                </Text>

                <Text style={styles.title}>3. User Control and Consent:</Text>
                <Text>
                    You can enable or disable push notifications for FactMagnifier at any time through your device's settings.
                    By using our Service, you agree to the collection and use of information in relation to this policy.
                </Text>

                <Text style={styles.title}>4. Compliance with Laws:</Text>
                <Text>
                    FactMagnifier will disclose your personal information where required to do so by law or subpoena.
                    We are committed to complying with all applicable laws and regulations regarding user data and privacy.
                </Text>

                <Text style={styles.title}>5. Changes to This Privacy Policy:</Text>
                <Text>
                    We may update our Privacy Policy from time to time.
                    Thus, we advise you to review this page periodically for any changes.
                    We will notify you of any changes by posting the new Privacy Policy on this page.
                    These changes are effective immediately after they are posted on this page.
                </Text>

                <Text style={styles.title}>6. Contact Us:</Text>
                <Text>
                    If you have any questions or suggestions about our Privacy Policy,
                    do not hesitate to contact us at <TouchableOpacity style={styles.buttons} onPress={()=> openURL(email)}><Text style={styles.buttonText}>mindbrew.app@gmail.com</Text></TouchableOpacity>.
                </Text>

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    subContainer: {
        width: '90%',
        marginTop: 45,
        marginBottom:10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:15
    },
    buttons:{
        justifyContent:'flex-end'
    },
    buttonText:{
        color:'blue',
        textDecorationLine:"underline"
    }
})

export default SettingsPrivacyScreen;