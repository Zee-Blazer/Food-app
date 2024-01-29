
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const paymentUsersStyles = StyleSheet.create({
    paymentIconCont: {
        paddingTop: 25,
        width: 89,
        height: 72,
        backgroundColor: "#F0F5FA",
        borderRadius: 10,
        alignItems: "center",
    },
    paymentIconTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        marginTop: 4,
        textAlign: 'center',
        color: "464E57"
    },
    noCardImg: {
        width: 300,
        height: 217
    }
});
