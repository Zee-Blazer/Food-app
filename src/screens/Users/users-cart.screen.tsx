
import { View, ScrollView, SafeAreaView } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { CartOptionContainer } from "../../components/Users-Comp/Users Cart/cart-options-container";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const UsersCartScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "#121223", flex: 1 }}>
            <View style={ usersCartUsersStyles.body }>

                <UsersCartHeaderComponent />

                <View style={{ marginVertical: 12 }}></View>
                
                <ScrollView>
                    <CartOptionContainer 
                        price={64}
                        resName="Pizza Calzone European"
                        size={14}
                        amount={2}
                        imgUri={ require("../../../assets/Images/Burger/burger1.jpg") }
                    />
                    <CartOptionContainer 
                        price={95}
                        resName="Spicy Restaurant"
                        size={16}
                        amount={3}
                        imgUri={ require("../../../assets/Images/Hot-Dog/dog1.jpg") }
                    />
                </ScrollView>

            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <FormBtnComponent 
                    title="PLACE ORDER"
                    func={ () => navigation.navigate("Payment") }
                />
            </View>

        </SafeAreaView>
    )
}
