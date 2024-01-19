
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Theme styling
import { theme } from "../../infrastructure/Theme";

export const onboardingScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    lottie: {
        width: width*0.9,
        height: width
    },
    doneButton: {
        padding: 20,
        backgroundColor: theme.colors.buttons.primary,
        width: width*0.8,
        marginRight: width*0.1,
        textAlign: "center",
        borderRadius: theme.sizes[0]
    },
    nextButton: {
        padding: 10,
        backgroundColor: theme.colors.buttons.primary,
        width: width*0.2,
        marginRight: 6,
        textAlign: "center",
        borderRadius: theme.sizes[0]
    },
    skipButton: {
        padding: 10,
        backgroundColor: theme.colors.buttons.secondary,
        width: width*0.2,
        marginLeft: 6,
        textAlign: "center",
        borderRadius: theme.sizes[0]
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize: theme.fontSizes.sz,
        fontWeight: theme.fontweights.bold,
    },
    flexOpose: {
        display: "flex",
        flexDirection: "row"
    }
})
