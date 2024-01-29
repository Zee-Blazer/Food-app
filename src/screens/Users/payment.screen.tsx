
import { View, Text, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { PaymentCardTypeContainerComponent } from "../../components/Users-Comp/Payment/payment-card-type-container.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";
import { TransparentBtnComponent } from "../../components/Users-Comp/Payment/transparent-btn.component";

export const PaymentScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Payment"
                />
                <View style={{ marginVertical: 12 }}></View>

                <PaymentCardTypeContainerComponent />

                <TransparentBtnComponent 
                    title="ADD NEW"
                    func={ () => console.log("Doing fine") }
                />

            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <Text>Total: <Text>$96</Text></Text>
                <FormBtnComponent 
                    title="PAY & CONFIRM"
                    func={ () => {} }
                />
            </View>
        </SafeAreaView>
    )
}
