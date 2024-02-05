
import { View, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { AddressDisplayInfoContainerComponent } from "../../components/Users-Comp/Address Section/address-display-info-container.component";

export const AddressUsersScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="My Address"
                    icon={ true }
                />

                <AddressDisplayInfoContainerComponent />

            </View>
        </SafeAreaView>
    )
}
