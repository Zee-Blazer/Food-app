
import { View, TouchableOpacity, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";

export const RunningOrderStat = () => {

    return (
        <TouchableOpacity style={ homeChefScreenStyles.orderContStat }>
            <Text style={ homeChefScreenStyles.orderContStatMainTxt }>20</Text>
            <Text style={ homeChefScreenStyles.orderContStatMainSubTxt }>RUNNING ORDERS</Text>
        </TouchableOpacity>
    )
}
