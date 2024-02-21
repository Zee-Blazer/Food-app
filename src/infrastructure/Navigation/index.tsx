
import { NavigationContainer } from "@react-navigation/native";

// Auth Stack Navigation
import { AuthNavigation } from "./auth.nav";

// Users Stack Navigation
import { UsersNavigation } from "./User-Navigation";

// Chef Tab Navigation
import { ChefTabNavigation } from "./Chef-Navigation";

export const Navigation = () => {

    const isAuthenticated = !!false;
    const isAdmin = true;

    return (
        <NavigationContainer>
            { 
                isAuthenticated ? 
                    <AuthNavigation /> : 
                    isAdmin ? 
                        <UsersNavigation /> : <ChefTabNavigation /> 
            }
        </NavigationContainer>
    )
}
