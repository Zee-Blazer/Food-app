
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const usersCartUsersStyles = StyleSheet.create({
    body: {
        flex: 1,
        marginHorizontal: theme.space[9],
        backgroundColor: "#121223",
        color: "white"
    },
    upperEditTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        textDecorationLine: "underline",
        marginTop: 14
    },
    cartOptionCont: {
        marginVertical: 16
    },
    cartOptionImg: {
        width: 145,
        height: 120,
        borderRadius: 25,
        marginRight: theme.space[8]
    },
    mainRestTxt: {
        fontSize: 18,
        fontFamily: theme.fonts.body,
        color: "white",
        maxWidth: 200
    }
});
