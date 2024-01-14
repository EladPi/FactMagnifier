import { Text, StyleSheet, SafeAreaView,TouchableOpacity, ScrollView } from "react-native";
const SettingsLicenseScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subContainer} contentContainerStyle={{ paddingBottom:30}}>
                <Text style={[styles.title, {marginBottom:20}]}>Last Updated: 7/1/2024</Text>

                <Text>Welcome to ThinkTrail! These terms and conditions outline the rules and regulations for the use of the App, ThinkTrail.</Text>

                <Text>
                    By accessing and using ThinkTrail, you accept and agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access or use the App.
                </Text>

                <Text style={styles.title}>Definitions:</Text>
                <Text>"App" refers to the ThinkTrail application.</Text>
                <Text>"User," "You," and "Your" refers to you, the person using this App.</Text>
                <Text>"We," "Us," "Me", and "Our" refers to Elad.</Text>

                <Text style={styles.title}>Use of the App:</Text>
                <Text>
                You agree to use the App only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the App. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the App.
                </Text>

                <Text style={styles.title}>Intellectual Property:</Text>
                <Text>
                The App and its original content (excluding content provided by FunGeneratorsAPI), features, and functionality are and will remain the exclusive property of Elad and its licensors.
                </Text>

                <Text style={styles.title}>Modifications of the App:</Text>
                <Text>
                We reserve the right to modify or discontinue, temporarily or permanently, the App or any part of it with or without notice.
                </Text>

                <Text style={styles.title}>Termination:</Text>
                <Text>
                We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms and Conditions.
                </Text>

                <Text style={styles.title}>Changes to Terms and Conditions:</Text>
                <Text>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes to the terms.
                </Text>

                <Text style={styles.title}>Contact Us:</Text>
                <Text>
                If you have any questions about these Terms, please contact us at
                </Text>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.link}>thinktrail.app@gmail.com</Text>
                </TouchableOpacity>
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
        height: '90%',
        width: '90%',
        marginTop: 45,
        marginBottom:15,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    title:{
        marginTop:15,
        fontSize:16,
        fontWeight:"bold",
    },
    touchable:{
        
    },
    link:{
        textDecorationLine:'underline',
        color:'blue'
    }
})

export default SettingsLicenseScreen;