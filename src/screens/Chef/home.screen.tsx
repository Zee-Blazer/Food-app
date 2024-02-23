import React, { useState, useMemo, useRef } from 'react';

import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Bottom Sheet
import BottomSheet from '@gorhom/bottom-sheet';

// Components
import { DashboardHeaderComponent } from "../../components/Users-Comp/Header/dashboard-header.component";
import { StatsContainerComponent } from "../../components/Chef-Comp/Statistics/stats-container.component";
import { ChartRevenueContainerComponent } from '../../components/Chef-Comp/Statistics/Chart Revenue/chart-revenue-container.component';
import { ReviewsInfoComponent } from '../../components/Chef-Comp/Statistics/reviews-info.component';
import { PopularItemsContainerComponent } from '../../components/Chef-Comp/Popular Items/popular-items-container.component';

export const ChefHomeScreen = () => {

    const snapPoints = useMemo( () => ["80%"], [] );
    const bottomSheetRef = useRef<BottomSheet>(null);

    const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

    const snapToIndex = (index: number) => bottomSheetRef.current?.snapToIndex(index);

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <View style={ homeChefScreenStyles.horiSpacer }>
                    <DashboardHeaderComponent 
                        isAdmin={ true }
                    />
                </View>

                <StatsContainerComponent />

                <ChartRevenueContainerComponent />

                <ReviewsInfoComponent />

                <PopularItemsContainerComponent />

                <Text onPress={ () => setShowBottomSheet(true) }>Open Bottom Sheet</Text>
            </View>

            {
                showBottomSheet && 
                <BottomSheet
                    snapPoints={ snapPoints } 
                    enablePanDownToClose  
                    ref={ bottomSheetRef }
                    backgroundStyle={{ backgroundColor: "#FFFFFF" }}
                >
                    <View>
                        <Text>Working perfectly well</Text>
                    </View>
                </BottomSheet>
            }
        </SafeAreaView>
    )
}
