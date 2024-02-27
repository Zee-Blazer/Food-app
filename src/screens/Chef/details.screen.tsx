
import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { MainNotificationContainerComponent } from "../../components/Chef-Comp/Notification/main-notification-container.component";
import { NavItemDetailsContainerComponent } from "../../components/Chef-Comp/Details/nav-item-details-container.component";
import { AllMealsContainerComponent } from "../../components/Chef-Comp/Details/all-meals-container.component";

export const ChefDetailsScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <MainNotificationContainerComponent 
                    title="My Food List"
                />

                <NavItemDetailsContainerComponent />

                <AllMealsContainerComponent />
            </View>
        </SafeAreaView>
    )
}
