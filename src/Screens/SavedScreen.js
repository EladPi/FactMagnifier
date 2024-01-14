import { SafeAreaView} from "react-native";
import SavedFactsContainer from "../Components/SavedFactsContainer";

const SavedScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{backgroundColor:'aliceblue', height:'100%'}}>
            <SavedFactsContainer />
        </SafeAreaView>
    )
}

export default SavedScreen;