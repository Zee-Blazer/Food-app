
import { View, SafeAreaView, TouchableOpacity, Text, Image } from "react-native";

// Theme
import { theme } from "../../Theme";

export const ProfileStyledComponent = () => {

    return (
        <SafeAreaView>
            <TouchableOpacity
                style={{
                    height: 200,
                    alignItems: "center"
                }}
            >
                <Image 
                    source={ require('../../../../assets/Images/Profile/profile2.jpg') }
                    style={{
                        width: 130,
                        height: 130,
                        borderRadius: 200
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: theme.fonts.title,
                        marginTop: 8,
                        color: "#32343E"
                    }}
                >John Doe</Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: "#A0A5BA",
                        fontFamily: theme.fonts.body
                    }}
                >john.doe@gmail.com</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
