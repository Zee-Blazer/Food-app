
// Navigation
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";

// Stylings
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component 
import { DashboardHeaderComponent } from "../../components/Users-Comp/dashboard-header.component";

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <DashboardHeaderComponent />
                
            </View>
        </SafeAreaView>
    )
}
