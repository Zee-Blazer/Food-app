
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
        color: "#464E57"
    },
    noCardImg: {
        width: 240,
        height: 147,
        marginTop: 14
    },
    noCardCont: {
        width: 347,
        height: 275,
        borderRadius: 10,
        backgroundColor: "#F7F8F9",
        marginTop: 24,
        alignItems: "center",
        marginHorizontal: "3%",
        padding: 12
    },
    noCardHeaderTxt: {
        fontSize: 16,
        fontFamily: theme.fonts.title,
        marginTop: 10
    },
    noCardSubHeaderTxt: {
        color: "#2D2D2D", 
        width: 260, 
        textAlign: "center",
        fontSize: 15,
        fontFamily: theme.fonts.body,
        lineHeight: 21,
        marginTop: 6
    },
    submitBtn: {
        marginTop: 29,
        marginBottom: 38,
        backgroundColor: "white",
        paddingVertical: 23,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#F0F5FA",
        // alignItems: "center",
        paddingHorizontal: "35%"
    },
    submitBtnText: {
        textAlign: 'center',
        color: theme.colors.text.tertiary,
        fontWeight: "bold",
        fontFamily: theme.fonts.title
    },
});
