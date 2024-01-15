import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { openURL } from "../../Utils/openURL";

const SettingsContactScreen = ({ navigation }) => {
    const email = 'mailto:mindbrew.app@gmail.com'
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text}>
                    For information, questions, bug report and more, please contact us on:
                </Text>
                <TouchableOpacity onPress={()=>openURL(email)} style={styles.touchable}>
                    <Text style={styles.linkText}>mindbrew.app@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'aliceblue',
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    subContainer: {
        height: '90%',
        width: '90%',
        marginTop: 20,
        borderWidth:1,
        borderColor:'#ccc',
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
    text:{
        fontSize:16,
    },
    touchable:{
        fontSize:16,
    },
    linkText:{
        fontSize:16,
        textDecorationLine:'underline',
        color:'blue'
    },
})

export default SettingsContactScreen;