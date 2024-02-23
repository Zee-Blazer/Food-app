
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// React Native Component
import { TouchableOpacity, View, StyleSheet } from 'react-native';

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Theme
import { theme } from '../../Theme';

// Screens
import { ChefHomeScreen } from '../../../screens/Chef/home.screen';
import { ChefDetailsScreen } from '../../../screens/Chef/details.screen';

const ChefTab = createBottomTabNavigator();

export const ChefTabNavigation = () => {

    return (
        <ChefTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: theme.colors.icons.primary, //theme.colors.dark.bg.common,
                tabBarInactiveTintColor: "#AFAFAF",
                tabBarStyle: { 
                    backgroundColor: theme.colors.bg.primary, 
                    borderRadius: 32,
                    height: 109,
                    // padding: 21,
                    position: "absolute",
                    paddingTop: 14,
                    // paddingBottom: 7
                },
                headerShown: false,
                tabBarIconStyle: { fontSize: 25 }
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
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="dashboard" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Details" component={ ChefDetailsScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Add" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <View style={ styles.addIcon }>
                            <MaterialIcons name="add" size={ size } color={ color } 
                                style={ styles.icon }
                            />
                        </View>
                    ),
                }}
            />

            <ChefTab.Screen name="Notification" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="notifications-none" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Profile" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={ size } color={ color } />
                    ),
                }}
            />

        </ChefTab.Navigator>
    )
}

const styles = StyleSheet.create({
    addIcon: {
        // padding: 16,
        backgroundColor: "#FFF1F2",
        borderColor: "#FF7622",
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 4,
        marginHorizontal: 7
    },
    icon: {
        margin: 10,
        marginTop: 12,
        fontSize: 37,
        color: "#FF7622",
        minWidth: 36,
        minHeight: 36
    }
})
