
import { View, Text, TextInput } from "react-native";

// Styling
import { addCartUsersStyles } from "../../../styles/screens/add-cart-users.styles";

export const AddCartFormComponent = () => {

    return (
        <View>

            <View style={ addCartUsersStyles.formInputCont }>
                <Text style={ addCartUsersStyles.formInputLabel }>CARD HOLDER NAME</Text>
                <TextInput placeholder="John Doe" />
            </View>

        </View>
    )
}
