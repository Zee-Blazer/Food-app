
// Navigation
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text, View, ScrollView, } from "react-native";

// Stylings
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component 
import { DashboardHeaderComponent } from "../../components/Users-Comp/dashboard-header.component";
import { Greetingscomponent } from "../../components/Users-Comp/greetings.component";
import { SearchBarContComponent } from "../../components/Users-Comp/search-bar-cont.component";
import { CategoriesHeaderText } from "../../components/Users-Comp/Categories/category-header-text.component";
import { CategoryItemContainerComponent } from "../../components/Users-Comp/Categories/category-item-container.component";
import { DeliveryDetailsComponent } from "../../components/Users-Comp/Restaurants/delivery-detail.component";
import { RestaurantDetailContainerComponent } from "../../components/Users-Comp/Restaurants/restaurant-details-container.component";

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <DashboardHeaderComponent />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <Greetingscomponent 
                        name="Halal"
                    />

                    <SearchBarContComponent />

                    <CategoryItemContainerComponent />

                    <RestaurantDetailContainerComponent />

                </ScrollView>
                
            </View>
        </SafeAreaView>
    )
}
