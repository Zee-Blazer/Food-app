
import { StyleSheet } from "react-native";

// Theme 
import { theme } from "../../infrastructure/Theme";

export const homeChefScreenStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#F7F8F9",
    },
    horiSpacer: {
        marginHorizontal: theme.space[9],
    },
    statsContComp: {
        marginTop: 24
    },
    statsMarginBottom: {
        marginBottom: 54
    },
    flexDesign: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flexDisplay: {
        flexDirection: "row",
    },
    orderContStat: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 16,
        width: 168
    },
    orderContStatMainTxt: {
        fontSize: 50,
        fontFamily: theme.fonts.title,
        color: "#32343E"
    },
    orderContStatMainSubTxt: {
        color: "#838799",
        fontSize: 13,
        fontFamily: theme.fonts.title,
        marginBottom: 2
    },
    blockCont: {
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginVertical: 8,
        borderRadius: 20
    },
    blockContTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#32343E"
    },
    blockContTxtAll: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#FB6D3A",
        textDecorationLine: 'underline'
    },
    starBlockCont: {
        marginTop: 24
    },
    starRatingTxt: {
        fontSize: 21,
        fontFamily: theme.fonts.title,
        color: "#FB6D3A",
        marginLeft: 6
    },
    starBlockDescription: {
        fontFamily: theme.fonts.body,
        fontSize: 14,
        marginLeft: 10,
        marginTop: 4
    },
    popularItemCont: {
        marginVertical: 14
    },
    popularItemImg: {
        width: 150,
        height: 153,
        borderRadius: 18,
        marginRight: 12
    },
    moneyStyles: {
        fontSize: 22,
        fontFamily: theme.fonts.title,
        color: "#32343E"
    },
    downIconMenu: {
        marginLeft: 5,
        marginTop: 2
    },
    optionIconCont: {
        padding: 6,
        paddingBottom: 0,
        paddingTop: 7,
        borderWidth: 1,
        borderColor: "#E8EAED",
        marginTop: 6,
        borderRadius: 10,
        height: 32
    },
    optionContTxt: {
        fontSize: 12,
        color: "#9C9BA6",
        fontFamily: theme.fonts.body,
        marginLeft: 4
    }
})
