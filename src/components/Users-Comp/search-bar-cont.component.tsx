
// Icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Navigation 
import { useNavigation } from '@react-navigation/native';

import { View, TextInput } from 'react-native';

// Styling 
import { homeUsersScreenStyles } from '../../styles/screens/home-users.styles';

interface Props {
    redirect: boolean
}

export const SearchBarContComponent: React.FC<Props> = ({ redirect }) => {

    const navigation = useNavigation();

    return (
        <View style={ homeUsersScreenStyles.searchBarCont }>
            <AntDesign name="search1" size={15} color="#A0A5BA" />
            <TextInput 
                placeholder="Search"
                placeholderTextColor="#676767"
                style={ homeUsersScreenStyles.searchBarTxt }
                onFocus={ () => redirect && navigation.navigate("Search") }
            />
            {/* <MaterialIcons name="cancel" size={15} color="#CDCDCF" /> */}
        </View>
    )
}
