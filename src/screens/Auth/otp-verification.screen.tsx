import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView } from "react-native";

// Styles
import { loginStyle } from "../../styles/screens/login.styles";

// Components
import { TopImageComponent } from "../../components/Auth-Comp/top-image.component";
import { InputFieldComponent } from "../../components/Auth-Comp/input-field.component";
import { FormBtnComponent } from '../../components/Auth-Comp/form-btn.component';

export const OtpVerificationScreen = () => {

    return (
        <>
            <TopImageComponent 
                title="Verification"
                subtitle="We have sent a code to your email"
                extra="example@gmail.com"
                back={ true }
            />

            <View style={ loginStyle.formContainer }>
                <KeyboardAvoidingView>
                    
                </KeyboardAvoidingView>
            </View>
        </>
    )
}
