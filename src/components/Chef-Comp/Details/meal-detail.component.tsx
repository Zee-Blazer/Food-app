
import { View, TouchableOpacity, Text, Image } from "react-native";

// Icons
import { Entypo } from '@expo/vector-icons';

// Styling

export const MealDetailComponent = () => {

    return (
        <TouchableOpacity>
            <Image 
                source={ require('../../../../assets/Images/Pizza/pizza1.jpg') }
            />

            <View>

                <View>
                    <Text>Chicken Thai Biriyani</Text>
                    <Entypo name="dots-three-horizontal" size={23} color="#32343E" />
                </View>

            </View>
        </TouchableOpacity>
    )
}
