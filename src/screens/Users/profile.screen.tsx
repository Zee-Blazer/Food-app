
import { View, SafeAreaView, Text } from "react-native";

// Styling 
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component
import { RestaurantViewHeaderComponent } from "../../components/Users-Comp/Header/restaurant-view-header.component";
import { ProfileDetailsComponent } from "../../components/Users-Comp/Profile Section/profile-details.component";

export const ProfileScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <RestaurantViewHeaderComponent 
                    title="Profile"
                    func={ () => {} }
                />

                <ProfileDetailsComponent />

                <Text>Profile Screen</Text>
            </View>
        </SafeAreaView>
    )
}
