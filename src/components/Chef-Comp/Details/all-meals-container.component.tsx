
import { View, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { detailsChefStyles } from "../../../styles/screens/details-chef.styles";

export const AllMealsContainerComponent = () => {

    return (
        <View style={ homeChefScreenStyles.horiSpacer }>
            <Text style={ detailsChefStyles.introDetailsTxt }>Total 03 items</Text>
        </View>
    )
}
