
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const addCartUsersStyles = StyleSheet.create({
    formInputCont: {
        marginTop: 24
    },
    formInputLabel: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        marginBottom: 8,
        color: "#A0A5BA"
    }
});
