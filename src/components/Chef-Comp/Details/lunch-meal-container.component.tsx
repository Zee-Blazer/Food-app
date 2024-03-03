
import { View, Text, ScrollView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { detailsChefStyles } from "../../../styles/screens/details-chef.styles";

// Component
import { MealDetailComponent } from "./meal-detail.component";

export const LunchMealsContainerComponent = () => {

    return (
        <View style={ homeChefScreenStyles.horiSpacer }>
            <Text style={ detailsChefStyles.introDetailsTxt }>Total 03 items</Text>

            <ScrollView>
                <MealDetailComponent />
                <MealDetailComponent />
                <MealDetailComponent />
            </ScrollView>
        </View>
    )
}
