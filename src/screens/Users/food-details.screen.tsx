
import { View, Text, SafeAreaView, ScrollView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { FoodDetailContainerComponent } from "../../components/Users-Comp/Food Details/food-detail-container.component";
import { FoodSizeComponent } from "../../components/Users-Comp/Food Details/food-sizes.component";
import { FoodIngridentComponent } from "../../components/Users-Comp/Food Details/food-ingridents.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const FoodDetailsScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent />

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <FoodDetailContainerComponent />

                    <FoodSizeComponent />

                    <FoodIngridentComponent />

                    <FormBtnComponent 
                        title="ADD TO CART"
                        func={ () => console.log("It's working fine") }
                    />
                    
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
