
import { View, SafeAreaView, ScrollView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { ProfileDetailsComponent } from "../../components/Users-Comp/Profile Section/profile-details.component";

export const ProfileInfoScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <UsersCartHeaderComponent 
                    title="Profile Info"
                    screenType="ProfileInfo"
                />

                <ProfileDetailsComponent />
            </View>
        </SafeAreaView>
    )
}
