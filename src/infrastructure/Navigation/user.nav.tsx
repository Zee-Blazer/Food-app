
import { createStackNavigator } from "@react-navigation/stack";

// Screens 
import { HomeScreen } from "../../screens/Users/home.screen";

const UsersStack = createStackNavigator();

export const UsersNavigation = () => {

    return (
        <UsersStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <UsersStack.Screen name="Home" component={HomeScreen} />
        </UsersStack.Navigator>
    )
}
