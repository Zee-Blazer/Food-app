
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const foodDetailsUserStyles = StyleSheet.create({
    resDetailsImg: {
        width: 358,
        height: 194,
        borderRadius: 32,
        // backgroundColor: "black"
    },
    spaceTop: {
        marginTop: 44
    },
    heartBox: {
        backgroundColor: "rgba(0, 0, 0, 0.46)",
        padding: 4,
        paddingLeft: 6,
        width: 42,
        height: 42,
        top: "-22%",
        left: "83%",
        borderRadius: 50
    },
    resTextCheff: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        marginTop: 12,
        color: "#181C2E"
    }
});
