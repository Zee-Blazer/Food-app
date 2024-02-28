
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const foodDetailsChefStyles = StyleSheet.create({
    mainFoodDetailImg: {
        width: 364, 
        height: 214,
        borderRadius: 20,
        marginHorizontal: "auto",
        alignSelf: "center"
    },
    imgInnerBox: {
        marginHorizontal: 64,
        marginTop: -36,
        marginBottom: 24
    },
    insideImgBox: {
        backgroundColor: "#ffffffd2",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 30
    },
    insideImgBoxTxt: {
        fontSize: 14,
        color: "#32343E",
        fontFamily: theme.fonts.body
    },
    mealDescriptTitleTxt: {
        fontSize: 18,
        fontFamily: theme.fonts.title,
        color: "#32343E"
    }
});
