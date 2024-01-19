
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View, ImageBackground } from "react-native";

// Styling 
import { loginStyle } from "../../styles/screens/login.styles";

export const LoginScreen = () => {

    return (
        <>
            <ImageBackground 
                source={ require('../../../assets/Images/BG-Asset.png') }
                imageStyle={ loginStyle.darkBg }
                style={ loginStyle.upperBg }
            >
                <View style={ loginStyle.headerBox }>
                    <Text style={ loginStyle.headerText }>Log In</Text>
                    <Text style={ loginStyle.headerPara }>Please sign in to your existing account</Text>
                </View>
            </ImageBackground>
            <View style={ loginStyle.formContainer }>
                <Text>Something New</Text>
            </View>
        </>
    )
}
