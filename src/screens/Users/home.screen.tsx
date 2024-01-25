
// Navigation
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Stylings
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component 
import { DashboardHeaderComponent } from "../../components/Users-Comp/dashboard-header.component";
import { Greetingscomponent } from "../../components/Users-Comp/greetings.component";
import { SearchBarContComponent } from "../../components/Users-Comp/search-bar-cont.component";
// import { CategoriesHeaderText } from "../../components/Users-Comp/category-header-text.component";
import { CategoriesHeaderText } from "../../components/Users-Comp/Categories/category-header-text.component";
// import { CategoryItemContainerComponent } from "../../components/Users-Comp/category-item-container.component";
import { CategoryItemContainerComponent } from "../../components/Users-Comp/Categories/category-item-container.component";

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <DashboardHeaderComponent />

                <Greetingscomponent 
                    name="Halal"
                />

                <SearchBarContComponent />

                <CategoryItemContainerComponent />

                <View>
                    <CategoriesHeaderText 
                        cateName="Open Restaurants"
                    />

                    <TouchableOpacity style={ homeUsersScreenStyles.restaurantCont }>
                        <Image 
                            source={ require("../../../assets/Images/Restaurants/resturant1.jpg") }
                            style={ homeUsersScreenStyles.restaurantImg }
                        />
                        <Text style={ homeUsersScreenStyles.restaurantContHeaderTxt }>
                            Rose Garden Restaurant
                        </Text>
                        <Text style={ homeUsersScreenStyles.restaurantContSubHeaderTxt }>
                            Burger - Chiken - Riche - Wings 
                        </Text>

                        <View 
                            style={[ 
                                homeUsersScreenStyles.flexDisplay, 
                                homeUsersScreenStyles.spaceTopLittle 
                            ]}
                        >
                            <View 
                                style={[ 
                                    homeUsersScreenStyles.flexDisplay, 
                                    homeUsersScreenStyles.iconTextCont 
                                ]}
                            >
                                <FontAwesome name="star-o" size={20} color="#FF7622" />
                                <Text style={ homeUsersScreenStyles.iconText }>4.7</Text>
                            </View>
                            <View 
                                style={[ 
                                    homeUsersScreenStyles.flexDisplay,
                                    homeUsersScreenStyles.iconTextCont 
                                ]}
                            >
                                <MaterialCommunityIcons name="truck-fast-outline" size={22} color="#FF7622" />
                                <Text style={ homeUsersScreenStyles.iconText }>Free</Text>
                            </View>
                            <View 
                                style={[ 
                                    homeUsersScreenStyles.flexDisplay,
                                    homeUsersScreenStyles.iconTextCont 
                                ]}
                            >
                                <MaterialCommunityIcons name="clock-outline" size={20} color="#FF7622" />
                                <Text style={ homeUsersScreenStyles.iconText }>20 min</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    )
}
