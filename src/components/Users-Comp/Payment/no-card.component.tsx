
import { View, Text, Image } from "react-native";

// Styling
import { paymentUsersStyles } from "../../../styles/screens/payment-users.styles";

export const NoCardComponent = () => {

    return (
        <View>
            <Image 
                source={ require('../../../../assets/Images/Payment-Icon/43.png') }
                style={ paymentUsersStyles.noCardImg }
            />
        </View>
    )
}
