
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const notificationChefStyles = StyleSheet.create({
    headerNotificationTxt: {
        fontSize: 21,
        fontFamily: theme.fonts.body,
        marginVertical: 12
    },
    notificationContainer: {
        marginTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 2,
        borderBottomColor: "#F0F4F9",
    },
    iconPersonCont: {
        backgroundColor: "#98A8B8",
        padding: 6,
        borderRadius: 50,
        height: 54,
        width: 54
    }
});
