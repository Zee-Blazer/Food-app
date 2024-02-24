
import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { MainNotificationContainerComponent } from "../../components/Chef-Comp/Notification/main-notification-container.component";
import { NotificationContainerComponent } from "../../components/Chef-Comp/Notification/notification-container.component";

export const ChefNotificationScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>
                <MainNotificationContainerComponent />

                <NotificationContainerComponent />
            </View>
        </SafeAreaView>
    )
}
