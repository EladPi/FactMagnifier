import { Text, View, StyleSheet, SafeAreaView,ScrollView } from "react-native";
const SettingsAboutScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subContainer} contentContainerStyle={{justifyContent:'space-evenly',paddingBottom:30}}>
                <Text style={styles.title}>Welcome to FactMagnifier!</Text>
                <Text>
                    FactMagnifier is your pocket-sized partner in the endless quest for knowledge.
                    Dive into a sea of interesting facts and let us quench your curiosity, one fact at a time.
                    Here's what makes FactMagnifier special:
                </Text>

                <Text style={styles.subtitle}>Explore Facts:</Text>
                <Text>
                    At the heart of FactMagnifier is the 'Facts' tab, your gateway to discovering random tidbits from across the globe.
                    Each swipe brings you a new fact, a new story, and perhaps a new perspective.
                </Text>

                <Text style={styles.subtitle}>Curate Your Experience:</Text>
                <Text>
                    With the 'Categories' tab, you have the power to tailor your learning journey.
                    Choose from a variety of intriguing categories and receive facts that pique your particular interests.
                    Whether it's science, history, or the animal kingdom that captivates you, FactMagnifier has something for everyone.
                </Text>

                <Text style={styles.subtitle}>Save What Fascinates You:</Text>
                <Text>
                    Stumble upon a fact that resonates with you? Save it for later!
                    The 'Saved' tab is your personal collection of wonders, allowing you to revisit and ponder over the facts that left an impression.
                </Text>

                <Text style={styles.subtitle}>Stay Notified, Stay Enlightened:</Text>
                <Text>
                    Enable push notifications and receive a sprinkle of knowledge throughout your day.
                    With 3-5 notifications between 9 AM and 9 PM,
                    FactMagnifier ensures your daily dose of facts is both delightful and non-intrusive.
                </Text>

                <Text>
                    FactMagnifier is more than just an app; it's a commitment to continuous learning and wonderment.
                    Our mission is to ignite curiosity, inspire learning, and make every moment an opportunity to learn something new.
                </Text>

                <Text style={[styles.subtitle, {marginBottom:15}]}>
                    Join us on this journey of discovery. Unleash the power of knowledge with FactMagnifier.
                </Text>

                <Text>
                    For more information, questions, or feedback, please feel free to contact us. We're here to cook knowledge and serve it fresh to your mind!
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
        justifyContent: 'center'
    },
    subContainer: {
        width: '90%',
        marginTop: 45,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
    },
    subtitle:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:20,
    }
})

export default SettingsAboutScreen;