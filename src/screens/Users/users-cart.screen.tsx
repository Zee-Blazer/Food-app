
import { View, Text, SafeAreaView } from "react-native";

// Styling
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { CartOptionContainer } from "../../components/Users-Comp/Users Cart/cart-options-container";

export const UsersCartScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#121223", flex: 1 }}>
            <View style={ usersCartUsersStyles.body }>

                <UsersCartHeaderComponent />

                <View style={{ marginVertical: 12 }}></View>
                
                <CartOptionContainer />

            </View>
        </SafeAreaView>
    )
}
