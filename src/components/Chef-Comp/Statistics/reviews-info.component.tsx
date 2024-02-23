
import { View, Text, TouchableOpacity } from "react-native";

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
        </View>
    )
}
