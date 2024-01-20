
import { createStackNavigator } from "@react-navigation/stack";

import { Text } from 'react-native';

// Screens 
import { LoginScreen } from "../../screens/Auth/login.screen";
import { SignupScreen } from "../../screens/Auth/signup.screen";
import { OnboardingScreen } from "../../screens/Auth/onboarding.screen";
import { ForgotPasswordScreen } from "../../screens/Auth/forgot-password.screen";

const AuthStack = createStackNavigator();

export const AuthNavigation = () => {

    return (
        <AuthStack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
                headerShown: false
            }}
        >

            <AuthStack.Screen 
                name="Login" 
                component={ LoginScreen } 
            />

            <AuthStack.Screen 
                name="Signup" 
                component={ SignupScreen } 
                options={ ({ navigation, route }) => ({
                    headerLeft: () => (
                        <Text style={{ color: "white", fontSize: 230 }}>Back</Text>
                    )
                }) }
            />

            <AuthStack.Screen 
                name="Onboarding" 
                component={ OnboardingScreen } 
            />

            <AuthStack.Screen 
                name="ForgotPassword" 
                component={ ForgotPasswordScreen } 
            />

        </AuthStack.Navigator>
    )
}
