
import { NavigationContainer } from "@react-navigation/native";

// Auth Stack Navigation
import { AuthNavigation } from "./auth.nav";

// Users Stack Navigation
import { UsersNavigation } from "./user.nav";

export const Navigation = () => {

    const isAuthenticated = !!true;

    return (
        <NavigationContainer>
            { isAuthenticated ? <AuthNavigation /> : <UsersNavigation /> }
        </NavigationContainer>
    )
}
