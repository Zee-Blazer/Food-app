
import { View, TouchableOpacity, Image, Text } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { notificationChefStyles } from "../../../styles/screens/notification-chef.styles";

export const NotificationContainerComponent = () => {

    return (
        <TouchableOpacity 
            style={[ 
                homeChefScreenStyles.horiSpacer,
                notificationChefStyles.notificationContainer,
                homeChefScreenStyles.flexDesign
            ]}
        >

            <View style={ notificationChefStyles.iconPersonCont }>
                <FontAwesome name="user" size={42} color="#F0F4F9" style={{ alignSelf: "center" }} />
            </View>

            <Text></Text>

        </TouchableOpacity>
    )
}
