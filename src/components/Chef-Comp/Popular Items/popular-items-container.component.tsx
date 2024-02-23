
import { View, TouchableOpacity, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";

export const PopularItemsContainerComponent = () => {

    return (
        <View
            style={[
                homeChefScreenStyles.blockCont,
                homeChefScreenStyles.horiSpacer
            ]}
        >
            <View style={ homeChefScreenStyles.flexDesign }>
                <Text style={ homeChefScreenStyles.blockContTxt }>Popular Items This Weeks</Text>
                <TouchableOpacity>
                    <Text style={ homeChefScreenStyles.blockContTxtAll }>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
