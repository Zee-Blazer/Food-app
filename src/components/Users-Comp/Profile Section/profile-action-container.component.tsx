
import { View, Text, Image, TouchableOpacity } from "react-native";

// Icon
import { AntDesign } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { profileUsersStyles } from "../../../styles/screens/profile-users.styles";

export const ProfileActionContainerComponent = () => {

    return (
        <View style={[ profileUsersStyles.profileActionCont ]}>
            <TouchableOpacity 
                style={[ 
                    homeUsersScreenStyles.flexDisplay,
                    homeUsersScreenStyles.flexDesign,
                    { marginBottom: 16 }
                ]}
            >
                <View style={[ homeUsersScreenStyles.flexDisplay, { alignItems: "center" } ]}>
                    <Image 
                        source={ require('../../../../assets/Images/Icons/profile.png') }
                        style={{ marginTop: -4 }}
                    />
                    <Text style={ profileUsersStyles.profileActionContTxt }>Profile Info</Text>
                </View>
                <AntDesign 
                    name="right" size={16} color="#181C2E" 
                    style={{ marginTop: 6, marginLeft: 4 }} 
                />
            </TouchableOpacity>

            <TouchableOpacity 
                style={[ 
                    homeUsersScreenStyles.flexDisplay,
                    homeUsersScreenStyles.flexDesign,
                    { marginBottom: 16 }
                ]}
            >
                <View style={[ homeUsersScreenStyles.flexDisplay, { alignItems: "center" } ]}>
                    <Image 
                        source={ require('../../../../assets/Images/Icons/address.png') }
                        style={{ marginTop: -4 }}
                    />
                    <Text style={ profileUsersStyles.profileActionContTxt }>Addresses</Text>
                </View>
                <AntDesign 
                    name="right" size={16} color="#181C2E" 
                    style={{ marginTop: 6, marginLeft: 4 }} 
                />
            </TouchableOpacity>
        </View>
    )
}
