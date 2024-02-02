import React, { useMemo, useState, useRef } from "react";

import { View, Text, SafeAreaView, ScrollView } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Bottom Sheet
import BottomSheet from '@gorhom/bottom-sheet';

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

    const snapPoints = useMemo( () => ["25%", "50%", "70%"], [] );
    const bottomSheetRef = useRef<BottomSheet>(null);

    const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
    
    const snapToIndex = (index: number) => bottomSheetRef.current?.snapToIndex(index);

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
                        func={ () => {
                            setShowBottomSheet(true);
                            snapToIndex(0);
                            // navigation.navigate("UsersCart")
                        } }
                    />
                    
                </ScrollView>

                {
                    showBottomSheet &&
                    <BottomSheet 
                        snapPoints={ snapPoints } 
                        enablePanDownToClose
                        ref={ bottomSheetRef }
                    >
                        <View>
                            <Text>This is the bottom sheet</Text>
                        </View>
                    </BottomSheet>
                }

            </View>
        </SafeAreaView>
    )
}
