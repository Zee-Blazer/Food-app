
import { NavigationContainer } from "@react-navigation/native";

// Auth Stack import
import { AuthNavigation } from "./auth.nav";

export const Navigation = () => {

    return (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    )
}
