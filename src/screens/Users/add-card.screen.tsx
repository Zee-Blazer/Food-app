
import { View, Text, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { AddCartFormComponent } from "../../components/Users-Comp/Add Cart/add-cart-form-container.component";

export const AddCardScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Add Card"
                    icon={ false }
                />

                <AddCartFormComponent />

                <Text>Add Card Screen</Text>
            </View>
        </SafeAreaView>
    )
}
