
import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

export const ChefDetailsScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>
                <Text>The Details Screen</Text>
            </View>
        </SafeAreaView>
    )
}
