
import { View, TouchableOpacity, Text } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Icon
import { Ionicons } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";
import { usersCartUsersStyles } from "../../../styles/screens/users-cart-users.styles";

export const UsersCartHeaderComponent = () => {

    const navigation = useNavigation();

    return (
        <View 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.flexDesign, 
                { marginTop: 6 } 
            ]}
        >
            <View style={[ homeUsersScreenStyles.flexDisplay ]}>
                <TouchableOpacity 
                    onPress={ () => navigation.goBack() }
                    style={[ searchUsersStyles.backNavOpt, { backgroundColor: "rgba(255,255,255,0.2)" } ]}
                >
                    <Ionicons 
                        name="chevron-back-sharp" size={22} color="#FFFFFF" 
                        style={{ marginTop: 8, marginLeft: 8 }} 
                    />
                </TouchableOpacity>
                <Text style={[ searchUsersStyles.serachHeaderTxt, { color: "white" } ]}>
                    Cart
                </Text>
            </View>

            <TouchableOpacity>
                <Text style={[ usersCartUsersStyles.upperEditTxt, { color: "#FF7622" } ]}>
                    EDIT ITEMS
                </Text>
                {/* <Text style={[ usersCartUsersStyles.upperEditTxt, { color: "#059C6A" } ]}>
                    DONE
                </Text> */}
            </TouchableOpacity>
        </View>
    )
}
