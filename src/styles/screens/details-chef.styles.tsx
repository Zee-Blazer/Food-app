
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const detailsChefStyles = StyleSheet.create({
    navItemContainer: {
        borderBottomWidth: 2,
        justifyContent: "space-around",
        borderBottomColor: "#E8E8E8",
        marginTop: 10
    },
    navItemTxtCont: {
        paddingBottom: 15,
        paddingHorizontal: 14
    },
    navItemTxtContActive: {
        borderBottomWidth: 2,
        borderBottomColor: "#FB6D3A"
    },
    navItemTxt: {
        color: "#32343E",
        fontSize: 14,
        fontFamily: theme.fonts.body
    },
    navItemTxtActive: {
        color: "#FB6D3A",
        fontFamily: theme.fonts.title
    },
    introDetailsTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#9C9BA6",
        marginTop: 24,
        marginBottom: 10
    }
});
