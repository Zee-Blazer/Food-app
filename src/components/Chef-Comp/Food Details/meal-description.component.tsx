
import { View, Text } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { foodDetailsChefStyles } from "../../../styles/screens/food-details-chef.styles";

export const MealDescriptionComponent = () => {

    return (
        <View>
            <View style={[ homeChefScreenStyles.flexDesign, { marginHorizontal: 34 } ]}>
                <Text 
                    style={ foodDetailsChefStyles.mealDescriptTitleTxt }
                >Chicken Thai Biriyani</Text>
                <Text
                    style={ foodDetailsChefStyles.mealDescriptTitleTxt }
                >$60</Text>
            </View>

            <View style={[ homeChefScreenStyles.flexDesign, { marginHorizontal: 34, marginTop: 9 } ]}>
                <View style={ homeChefScreenStyles.flexDisplay }>
                    <FontAwesome 
                        name="map-marker" size={12} color="#AFAFAF" 
                        style={{ marginTop: 3, marginRight: 2 }} 
                    />
                    <Text>Kentucky 39495</Text>
                </View>
            </View>
        </View>
    )
}
