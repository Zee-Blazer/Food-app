
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
        marginVertical: 16,
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
    }
})
