
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { ChefHomeScreen } from '../../../screens/Chef/home.screen';

const ChefTab = createBottomTabNavigator();

export const ChefTabNavigation = () => {

    return (
        <ChefTab.Navigator>
            <ChefTab.Screen name="Home" component={ ChefHomeScreen } />
            <ChefTab.Screen name="Details" component={ ChefHomeScreen } />
            <ChefTab.Screen name="Add" component={ ChefHomeScreen } />
        </ChefTab.Navigator>
    )
}
