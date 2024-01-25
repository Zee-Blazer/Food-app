
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import { Feather } from '@expo/vector-icons';

// Styling 
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Props {
    cateName: string
}

export const CategoriesHeaderText: React.FC<Props> = ({ cateName }) => {

    return (
        <View 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                homeUsersScreenStyles.flexDesign, 
                homeUsersScreenStyles.spaceTop 
            ]}
        >
            <Text style={ homeUsersScreenStyles.cateHeadTxt }>{ cateName }</Text>
            <TouchableOpacity>
                <Text style={ homeUsersScreenStyles.cateSeeAllTxt }>
                    See All <Feather name="chevron-right" size={14} color="#A0A5BA" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}
