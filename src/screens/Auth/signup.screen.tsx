
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";

// Styling
import { loginStyle } from "../../styles/screens/login.styles";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component";
import { BottomFormComponent } from "../../components/Auth-Comp/bottom-form.component";

export const SignupScreen = () => {

    return (
        <>
            <TopImageComponent 
                title="Sign up"
                subtitle="Please sign up to get started"
                extra=""
                back={ true }
            />

            <ScrollView style={ loginStyle.scrollFormContainer }>

                <View>
                    <Text style={ loginStyle.labelText }>NAME</Text>
                    <TextInput 
                        placeholder="John Doe" 
                        style={ loginStyle.textInputStyle }
                        autoCorrect={ false }
                    />
                </View>
                
                <View>
                    <Text style={ loginStyle.labelText }>EMAIL</Text>
                    <TextInput 
                        placeholder="example@gmail.com" 
                        style={ loginStyle.textInputStyle }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />
                </View>

                <View>
                    <Text style={ loginStyle.labelText }>PASSWORD</Text>
                    <View style={ loginStyle.textInputStyle }>
                        <TextInput 
                            placeholder="* * * * * * * * * *" 
                            secureTextEntry={ true }
                            autoCapitalize="none"
                            autoCorrect={ false }
                            style={{ flex: 1 }}
                        />
                        { 
                            true ? 
                            <FontAwesome 
                                name="eye" size={14} color="black" 
                                style={ loginStyle.eyesIconStyle } 
                            />
                            :
                            <FontAwesome 
                                name="eye-slash" size={19} color="black" 
                                style={ loginStyle.eyesIconStyle } 
                            />
                        }
                    </View>
                </View>

                <View>
                    <Text style={ loginStyle.labelText }>RE-TYPE PASSWORD</Text>
                    <View style={ loginStyle.textInputStyle }>
                        <TextInput 
                            placeholder="* * * * * * * * * *" 
                            secureTextEntry={ true }
                            autoCapitalize="none"
                            autoCorrect={ false }
                            style={{ flex: 1 }}
                        />
                        { 
                            true ? 
                            <FontAwesome 
                                name="eye" size={14} color="black" 
                                style={ loginStyle.eyesIconStyle } 
                            />
                            :
                            <FontAwesome 
                                name="eye-slash" size={19} color="black" 
                                style={ loginStyle.eyesIconStyle } 
                            />
                        }
                    </View>
                </View>

                <TouchableOpacity style={ loginStyle.submitBtn }>
                    <Text style={ loginStyle.submitBtnText }>SIGN UP</Text>
                </TouchableOpacity>

                <BottomFormComponent 
                    type="signup"
                />

            </ScrollView>

        </>
    )
}
