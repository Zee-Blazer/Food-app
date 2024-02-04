
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

// Icon
import { AntDesign } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { profileUsersStyles } from "../../../styles/screens/profile-users.styles";

interface data {
    iconUri: string,
    title: string,
    link: string
}

interface Props {
    data: data[]
}

export const ProfileActionContainerComponent: React.FC<Props> = ({ data }) => {

    return (
        <View style={[ profileUsersStyles.profileActionCont ]}>

            <FlatList 
                data={ data }
                renderItem={ ({ item }) => (
                    <TouchableOpacity 
                        style={[ 
                            homeUsersScreenStyles.flexDisplay,
                            homeUsersScreenStyles.flexDesign,
                            { marginBottom: 16 }
                        ]}
                    >
                        <View style={[ homeUsersScreenStyles.flexDisplay, { alignItems: "center" } ]}>
                            <Image 
                                source={ item.iconUri }
                                style={{ marginTop: -4 }}
                            />
                            <Text style={ profileUsersStyles.profileActionContTxt }>{ item.title }</Text>
                        </View>
                        <AntDesign 
                            name="right" size={16} color="#181C2E" 
                            style={{ marginTop: 6, marginLeft: 4 }} 
                        />
                    </TouchableOpacity>
                ) }
                keyExtractor={ item => item.iconUri }
            />

        </View>
    )
}
