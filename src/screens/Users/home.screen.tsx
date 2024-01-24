
// Navigation
import { useNavigation } from "@react-navigation/native";

// Icons
import { Feather } from '@expo/vector-icons';

import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";

// Stylings
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component 
import { DashboardHeaderComponent } from "../../components/Users-Comp/dashboard-header.component";
import { Greetingscomponent } from "../../components/Users-Comp/greetings.component";
import { SearchBarContComponent } from "../../components/Users-Comp/search-bar-cont.component";

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

                <View>
                    <View style={[ homeUsersScreenStyles.flexDisplay, homeUsersScreenStyles.flexDesign ]}>
                        <Text style={ homeUsersScreenStyles.cateHeadTxt }>All Categories</Text>
                        <TouchableOpacity>
                            <Text style={ homeUsersScreenStyles.cateSeeAllTxt }>
                                See All <Feather name="chevron-right" size={14} color="#A0A5BA" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={ homeUsersScreenStyles.boxSpacing }>
                        <View style={ homeUsersScreenStyles.flexDisplay }>
                            <Image 
                                source={ require('../../../assets/Images/Restaurants/camp.jpg') } 
                                style={ homeUsersScreenStyles.displayImg }
                            />
                            <Text>All</Text>
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        </SafeAreaView>
    )
}
