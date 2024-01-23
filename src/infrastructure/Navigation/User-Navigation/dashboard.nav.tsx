
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screen 
import { HomeScreen } from "../../../screens/Users/home.screen";

// Dashboard Stack Navigation
import { UsersNavigation } from ".";

const DashboardDrawer = createDrawerNavigator();

export const DashboardNavigation = () => {

    return (
        <DashboardDrawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <DashboardDrawer.Screen name="Home" component={ HomeScreen } />
        </DashboardDrawer.Navigator>
    )
}
