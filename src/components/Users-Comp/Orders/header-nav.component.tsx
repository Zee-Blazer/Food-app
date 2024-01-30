
import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { ordersUserStyles } from "../../../styles/screens/orders-users.styles";

export const HeaderNavComponent = () => {

    return (
        <View style={[ homeUsersScreenStyles.flexDisplay, ordersUserStyles.navHeader ]}>
            <TouchableOpacity 
                style={[ 
                    // ordersUserStyles.activeNav, 
                    ordersUserStyles.navItems 
                ]}
            >
                <Text 
                    style={[ 
                        // ordersUserStyles.activeNavTxt,
                        ordersUserStyles.inactiveNavTxt 
                    ]}
                >Ongoing</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={[
                    ordersUserStyles.activeNav, 
                    ordersUserStyles.navItems,
                    // ordersUserStyles.navItems
                ]}
            >
                <Text 
                    style={[ 
                        ordersUserStyles.activeNavTxt,
                        // ordersUserStyles.inactiveNavTxt 
                    ]}
                >History</Text>
            </TouchableOpacity>
        </View>
    )
}
