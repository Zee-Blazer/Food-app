
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Screens
import { ChefHomeScreen } from '../../../screens/Chef/home.screen';

const ChefTab = createBottomTabNavigator();

export const ChefTabNavigation = () => {

    return (
        <ChefTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                // tabBarActiveTintColor: theme.colors.dark.bg.common,
                // tabBarStyle: { backgroundColor: theme.colors.dark.bg.primary },
                headerShown: false
            }}
            // tabBarOptions={
            //     // inactiveTintColor: theme.colors.dark.bg.plain
            //     // style: {
            //     //     backgroundColor: "white"
            //     // }
            // }
        >

            <ChefTab.Screen name="Home" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="dashboard" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Details" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Add" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Notification" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="notifications-none" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Profile" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={ size } color={ color } />
                    ),
                }}
            />

        </ChefTab.Navigator>
    )
}
