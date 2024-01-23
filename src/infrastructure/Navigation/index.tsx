
import { NavigationContainer } from "@react-navigation/native";

// Auth Stack Navigation
import { AuthNavigation } from "./auth.nav";

// Users Stack Navigation
import { UsersNavigation } from "./User-Navigation";
import { DashboardNavigation } from "./User-Navigation/dashboard.nav";

export const Navigation = () => {

    const isAuthenticated = !!false;

    return (
        <NavigationContainer>
            { isAuthenticated ? <AuthNavigation /> : <UsersNavigation /> }
        </NavigationContainer>
    )
}
