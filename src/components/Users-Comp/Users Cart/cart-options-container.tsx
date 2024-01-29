
import { View, Text, Image, TouchableOpacity } from "react-native";

// Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../../styles/screens/users-cart-users.styles";

export const CartOptionContainer = () => {

    return (
        <TouchableOpacity 
            style={[ 
                usersCartUsersStyles.cartOptionCont, 
                homeUsersScreenStyles.flexDisplay 
            ]}
        >
            <Image 
                source={ require("../../../../assets/Images/Burger/burger1.jpg") }
                style={ usersCartUsersStyles.cartOptionImg }
            />

            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    homeUsersScreenStyles.flexDesign, 
                    { flex: 1 } 
                ]}
            >
                <View>
                    <Text style={[ usersCartUsersStyles.mainRestTxt ]}>Pizza Calzone European</Text>
                    <Text style={{ color: "white" }}>$64</Text>
                </View>
                <MaterialIcons name="cancel" size={27} color="#E04444" />
            </View>
        </TouchableOpacity>
    )
}
