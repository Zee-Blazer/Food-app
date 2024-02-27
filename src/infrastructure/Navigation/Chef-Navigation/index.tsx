
import { createStackNavigator } from "@react-navigation/stack";

// Tab Navigation
import { ChefTabNavigation } from "./tab-nav";

// Review Screen
import { ReviewsScreen } from "../../../screens/Chef/reviews.screen";

const MainNav = createStackNavigator();

export const MainNavigation = () => {

    return (
        <MainNav.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <MainNav.Screen name="TabNav" component={ ChefTabNavigation } />
            <MainNav.Screen name="Reviews" component={ ReviewsScreen } />
        </MainNav.Navigator>
    )
}
