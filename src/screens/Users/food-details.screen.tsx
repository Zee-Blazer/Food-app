
import { View, Text, SafeAreaView, ScrollView } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { FoodDetailContainerComponent } from "../../components/Users-Comp/Food Details/food-detail-container.component";
import { FoodSizeComponent } from "../../components/Users-Comp/Food Details/food-sizes.component";
import { FoodIngridentComponent } from "../../components/Users-Comp/Food Details/food-ingridents.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const FoodDetailsScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Details"
                    icon={ true }
                />

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <FoodDetailContainerComponent />

                    <FoodSizeComponent />

                    <FoodIngridentComponent />

                    <FormBtnComponent 
                        title="ADD TO CART"
                        func={ () => navigation.navigate("UsersCart") }
                    />
                    
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
