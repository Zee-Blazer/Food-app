
import { View, Text } from "react-native";

// Components
import { ItemNameFormComponent } from "./Form/item-name-form.component";
import { ItemPhotoFormComponent } from "./Form/item-photo-form.component";

export const AddFormDataContainerComponent = () => {

    return (
        <View>

            <ItemNameFormComponent />
            <ItemPhotoFormComponent />


        </View>
    )
}
