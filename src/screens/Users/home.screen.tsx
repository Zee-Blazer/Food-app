
// Navigation
import { useNavigation } from "@react-navigation/native"

import { Text, View } from "react-native"

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text
                onPress={ () => navigation.navigate("Search") }
            >Home Screen</Text>
        </View>
    )
}
