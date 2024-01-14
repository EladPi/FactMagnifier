import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import rightArrow from '../Assets/right-arrow.png';
import notifications from '../Assets/notification.png';
import license from '../Assets/license.png';
import contact from '../Assets/contact.png';
import about from '../Assets/about.png';
import privacy from '../Assets/privacy.png';
import question from '../Assets/question.png';

const SettingsScreenButtons = ({ text, navTo }) => {
    const nav= useNavigation();

    const iconChooser = ()=>{
        switch(text){
            case 'Notifications':{
                return notifications;
            }
            case 'Terms and Conditions':{
                return license;
            }
            case 'Contact':{
                return contact;
            }
            case 'About':{
                return about;
            }
            case 'Privacy Policy':{
                return privacy;
            }
            default:{
                return question;
            }
        }
    }



    return (
        <TouchableOpacity style={styles.buttons} onPress={() => nav.navigate(navTo)}>
            <View style={styles.imageAndTextContainer}>
                <Image style={styles.image} source={iconChooser()}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
            <Image style={styles.image} source={rightArrow}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginHorizontal: 20,
    },
    secondaryContainer: {
        borderRadius: 1,
        borderColor: '#3ea4f7',
        borderWidth: 1,
        backgroundColor: 'aliceblue',
        borderRadius: 10,
        height: '98%',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    imageAndTextContainer: {
        flexDirection: 'row',
        width: '65%',
        justifyContent: 'space-between'
    },
    textContainer: {
        width: 200,
    },
    buttons: {
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 5,
        borderBottomColor:'#ccc'

    },
    text: {
        fontSize: 20
    },
    image: {
        width: 22,
        height: 22,
    },
})




export default SettingsScreenButtons