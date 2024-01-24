
// Icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { View, TextInput } from 'react-native';

// Styling 
import { homeUsersScreenStyles } from '../../styles/screens/home-users.styles';

export const SearchBarContComponent = () => {

    return (
        <View style={ homeUsersScreenStyles.searchBarCont }>
            <AntDesign name="search1" size={15} color="#A0A5BA" />
            <TextInput 
                placeholder="Search"
                placeholderTextColor="#676767"
                style={ homeUsersScreenStyles.searchBarTxt }
            />
            {/* <MaterialIcons name="cancel" size={15} color="#CDCDCF" /> */}
        </View>
    )
}
