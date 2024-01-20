
import { View, Text, ImageBackground } from 'react-native';

// Styling
import { loginStyle } from '../../styles/screens/login.styles';

interface Props {
    title: string,
    subtitle: string,
    extra: string
}

export const TopImageComponent: React.FC<Props> = ({ title, subtitle, extra }) => {

    return (
        <ImageBackground 
            source={ require('../../../assets/Images/BG-Asset.png') }
            imageStyle={ loginStyle.darkBg }
            style={ loginStyle.upperBg }
        >
            <View style={ loginStyle.headerBox }>
                <Text style={ loginStyle.headerText }>{ title }</Text>
                <Text style={ loginStyle.headerPara }>{ subtitle }</Text>
            </View>
        </ImageBackground>
    )
}
