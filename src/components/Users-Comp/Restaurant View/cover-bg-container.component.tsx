
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styling
import { restaurantViewUsersStyles } from "../../../styles/screens/restaurant-view-users.styles";
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

export const CoverBgContainerComponent = () => {

    return (
        <View style={ restaurantViewUsersStyles.coverBgContainer } >
            <View style={ restaurantViewUsersStyles.insideBgContainer }>

                <View style={[ homeUsersScreenStyles.flexDisplay, homeUsersScreenStyles.flexDesign ]}>
                    <Text 
                        style={ restaurantViewUsersStyles.insideBgHeaderTxt }
                    >
                        Filter your search
                    </Text>
                    <TouchableOpacity>
                        <MaterialIcons name="cancel" size={35} color="#181C2E" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
