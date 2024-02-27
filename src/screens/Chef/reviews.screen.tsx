
import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";

export const ReviewsScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <View style={ homeChefScreenStyles.horiSpacer }>
                    <FoodDetailsHeaderComponent 
                        screen="Reviews"
                        icon={ true }
                    />
                </View>

                <Text>Here is the Review screen</Text>
            </View>
        </SafeAreaView>
    )
}
