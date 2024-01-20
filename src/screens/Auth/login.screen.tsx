
import { Text, View, TextInput, TouchableOpacity } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styling 
import { loginStyle } from "../../styles/screens/login.styles";

// CheckBox
import CheckBox from '@react-native-community/checkbox';

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component";
import { BottomFormComponent } from "../../components/Auth-Comp/bottom-form.component";

export const LoginScreen = () => {

    return (
        <>
            <TopImageComponent 
                title="Log In"
                subtitle="Please sign in to your existing account"
                extra=""
                back={ false }
            />

            <View style={ loginStyle.formContainer }>
                
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
                
                <View style={ loginStyle.bottomFormRequest }>
                    <View>
                        {/* <CheckBoxBase value={ false } style={ loginStyle.checkBoxStyle } /> */}
                        <Text style={ loginStyle.rememberCheckText }>Remember me</Text>
                    </View>
                    <Text style={ loginStyle.forgotPasswordLink }>Forgot Password</Text>
                </View>

                <TouchableOpacity style={ loginStyle.submitBtn }>
                    <Text style={ loginStyle.submitBtnText }>LOG IN</Text>
                </TouchableOpacity>

                <BottomFormComponent 
                    type="login"
                />

            </View>
        </>
    )
}
