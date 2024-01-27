
import { createStackNavigator } from "@react-navigation/stack";

// Dashboard Drawer Navigation
import { DashboardNavigation } from "./dashboard.nav";

// Screens 
import { SearchScreen } from "../../../screens/Users/search.screen";
import { FoodScreen } from "../../../screens/Users/food.screen";
import { FoodDetailsScreen } from "../../../screens/Users/food-details.screen";
import { RestaurantViewScreen } from "../../../screens/Users/restaurant-view.screen";

const UsersStack = createStackNavigator();

export const UsersNavigation = () => {

    return (
        <UsersStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <UsersStack.Screen name="Dashboard" component={ DashboardNavigation } />
            {/* <UsersStack.Screen name="Home" component={ HomeScreen } /> */}
            <UsersStack.Screen name="Search" component={ SearchScreen } />
            <UsersStack.Screen name="Food" component={ FoodScreen } />
            <UsersStack.Screen name="FoodDetails" component={ FoodDetailsScreen } />
            <UsersStack.Screen name="RestaurantView" component={ RestaurantViewScreen } />
        </UsersStack.Navigator>
    )
}
