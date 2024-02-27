
import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { detailsChefStyles } from "../../../styles/screens/details-chef.styles";

export const NavItemDetailsContainerComponent = () => {

    return (
        <View style={[ homeChefScreenStyles.flexDesign, detailsChefStyles.navItemContainer ]}>
            <TouchableOpacity 
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    detailsChefStyles.navItemTxtContActive
                ]}
            >
                <Text 
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        detailsChefStyles.navItemTxtActive
                    ]}
                >All</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    // detailsChefStyles.navItemTxtContActive
                ]}
            >
                <Text
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        // detailsChefStyles.navItemTxtActive
                    ]}
                >Breakfast</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    // detailsChefStyles.navItemTxtContActive
                ]}
            >
                <Text
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        // detailsChefStyles.navItemTxtActive
                    ]}
                >Lunch</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[ 
                    detailsChefStyles.navItemTxtCont,
                    // detailsChefStyles.navItemTxtContActive
                ]}
            >
                <Text
                    style={[ 
                        detailsChefStyles.navItemTxt,
                        // detailsChefStyles.navItemTxtActive
                    ]}
                >Dinner</Text>
            </TouchableOpacity>
        </View>
    )
}
