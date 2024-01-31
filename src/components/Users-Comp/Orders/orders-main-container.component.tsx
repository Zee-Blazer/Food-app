import React, { useState } from 'react';

import { View, Text } from "react-native";

// Component
import { HeaderNavComponent } from "./header-nav.component";
import { HistorySectionComponent } from './history-section.component';

export const OrdersMainContainerComponent = () => {

    const [view, setView] = useState("Ongoing");

    const changeView = (e: string) => setView(e);

    return (
        <View>
            <HeaderNavComponent 
                func={ changeView }
                view={ view }
            />
            {
                view == "Ongoing" ?
                    <Text>Ongoing screen</Text>
                :
                    <HistorySectionComponent />
            }
        </View>
    )
}
