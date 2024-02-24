
import { View, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { notificationChefStyles } from "../../../styles/screens/notification-chef.styles";

export const MainNotificationContainerComponent = () => {

    return (
        <View style={ homeChefScreenStyles.horiSpacer }>
            <Text style={ notificationChefStyles.headerNotificationTxt }>Notifications</Text>
        </View>
    )
}
