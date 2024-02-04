
import { View } from "react-native";

// Component
import { ProfileActionContainerComponent } from "./profile-action-container.component";

export const ProfileActionComponent = () => {

    const data1 = [
        { iconUri: require("../../../../assets/Images/Icons/profile.png"), title: "Personal Info", link: "" },
    ]

    return (
        <View>
            <ProfileActionContainerComponent />

            <ProfileActionContainerComponent />
        </View>
    )
}
