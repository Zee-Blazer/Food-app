
import { View, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";

// Components
import { RunningOrderStat } from "./running-order-stat.component";
import { OrderRequestStats } from "./order-request-stat.component";

export const StatsContainerComponent = () => {

    return (
        <View 
            style={[ 
                homeChefScreenStyles.statsContComp, 
                homeChefScreenStyles.flexDesign, 
                homeChefScreenStyles.horiSpacer
            ]}
        >
            <RunningOrderStat />
            <OrderRequestStats />
        </View>
    )
}
