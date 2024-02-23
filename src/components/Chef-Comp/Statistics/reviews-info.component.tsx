
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";

export const ReviewsInfoComponent = () => {

    return (
        <View 
            style={[
                homeChefScreenStyles.blockCont,
                homeChefScreenStyles.horiSpacer
            ]}
        >
            <View style={ homeChefScreenStyles.flexDesign }>
                <Text style={ homeChefScreenStyles.blockContTxt }>Reviews</Text>
                <TouchableOpacity>
                    <Text style={ homeChefScreenStyles.blockContTxtAll }>See All Reviews</Text>
                </TouchableOpacity>
            </View>

            <View style={[ homeChefScreenStyles.starBlockCont, homeChefScreenStyles.flexDisplay ]}>
                <FontAwesome name="star" size={26} color="#FB6D3A" />
                <Text style={ homeChefScreenStyles.starRatingTxt }>4.9</Text>
                <Text style={ homeChefScreenStyles.starBlockDescription }>Total 20 Reviews</Text>
            </View>
        </View>
    )
}
