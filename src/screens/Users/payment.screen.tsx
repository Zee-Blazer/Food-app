
import { View, Text, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { PaymentCardTypeContainerComponent } from "../../components/Users-Comp/Payment/payment-card-type-container.component";

export const PaymentScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Payment"
                />
                <View style={{ marginVertical: 12 }}></View>

                <PaymentCardTypeContainerComponent />

            </View>
        </SafeAreaView>
    )
}
