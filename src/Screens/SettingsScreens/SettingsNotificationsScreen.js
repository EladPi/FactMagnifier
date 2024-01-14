import { Text ,View, StyleSheet, SafeAreaView } from "react-native";
import NotificationsSettingsComponents from "../../Components/NotificationsSettingsComponents";
const SettingsNotificationsScreen = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <NotificationsSettingsComponents />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'aliceblue',
        height:'100%',
        alignItems:'center'
    },
})

export default SettingsNotificationsScreen;