
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const addScreenChefStyles = StyleSheet.create({
    resetTxBtn: {
        fontSize: 14,
        color: "#FB6D3A",
        fontFamily: theme.fonts.body,
        marginTop: 18
    },
    formLabelTxt: {
        fontSize: 13,
        fontFamily: theme.fonts.body,
        color: "#32343E",
        letterSpacing: 1,
        marginBottom: 8
    },
    textInputItem: {
        borderWidth: 1,
        borderColor: "#E8EAED",
        width: '100%',
        borderRadius: 10,
        paddingVertical: 18, 
        paddingHorizontal: 16,
        backgroundColor: "#FDFDFD",
        fontFamily: theme.fonts.body,
        color: "#32343E",
        fontSize: 12
    }
});
