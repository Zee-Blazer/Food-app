
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const ordersUserStyles = StyleSheet.create({
    navHeader: {
        marginTop: 24,
        // paddingBottom: 16,
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBottomColor: "#CED7DF",
        marginBottom: 10
    },
    inactiveNavTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        textAlign: "center",
        color: "#A5A7B9"
    },
    activeNavTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.title,
        textAlign: "center",
        color: "#FF7622"
    },
    navItems: {
        paddingBottom: 16,
        width: "50%"
    },
    activeNav: {
        borderBottomColor: "#FF7622",
        borderBottomWidth: 1
    }
});
