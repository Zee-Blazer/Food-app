
import { View, Text, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { RestaurantViewHeaderComponent } from "../../components/Users-Comp/Header/restaurant-view-header.component";

export const RestaurantViewScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <RestaurantViewHeaderComponent />
                <Text>Restaurant View Screen</Text>
            </View>
        </SafeAreaView>
    )
}
