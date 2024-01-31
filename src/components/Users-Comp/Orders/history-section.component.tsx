
import { View, Text, Image, TouchableOpacity } from "react-native";

// Styling 
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { ordersUserStyles } from "../../../styles/screens/orders-users.styles";

export const HistorySectionComponent = () => {

    return (
        <View>
            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    ordersUserStyles.orderTagTxtStatusCont 
                ]}
            >
                <Text style={[ ordersUserStyles.orderTagTxtStatus ]}>
                    Food
                </Text>
                <Text 
                    style={[ 
                        ordersUserStyles.orderTagTxtStatus, 
                        ordersUserStyles.orderTagTxtStatusColor 
                    ]}
                >Completed</Text>
            </View>
            <View style={[ homeUsersScreenStyles.flexDisplay,  ]}>
                <Image 
                    source={ require('../../../../assets/Images/Pizza/pizza1.jpg') }
                    style={ ordersUserStyles.orderListItemImg }
                />

                <View>
                    <View 
                        style={[ 
                            homeUsersScreenStyles.flexDisplay, 
                            homeUsersScreenStyles.flexDesign 
                        ]}
                    >
                        <Text>Pizza Hut</Text>
                        <Text>#162432</Text>
                    </View>

                    <View>
                        <Text>$35.25</Text>
                        <Text></Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>Rate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Re-Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
