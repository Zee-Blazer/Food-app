
import { StyleSheet } from "react-native";

// Theme Styles
import { theme } from "../../infrastructure/Theme";

export const homeUsersScreenStyles = StyleSheet.create({
    body: {
        flex: 1,
        marginHorizontal: theme.space[9],
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flexDisplay: {
        flexDirection: "row"
    },
    titleText: {
        color: theme.colors.text.tertiary,
        fontSize: theme.fontSizes.sm,
        fontFamily: theme.fonts.title,
        marginTop: theme.space[4],
        marginBottom: theme.space[0]
    },
    nextTextLoc: {
        fontSize: theme.fontSizes.sz,
        fontFamily: theme.fonts.body
    },
    smallDownIcon: {
        marginTop: 4, marginLeft: 8
    },
    headerTextCont: {
        marginLeft: theme.space[8]
    },
    shopChartNote: {
        backgroundColor: "#181C2E",
        width: 45,
        height: 45,
        borderRadius: 50,
        marginTop: 2
    },
    shopChartNoteMsg: {
        position: "absolute",
        backgroundColor: "#FF7622",
        paddingVertical: 3,
        paddingHorizontal: theme.space[3],
        borderRadius: 50,
        marginLeft: 20,
        marginTop: -3
    },
    shopChartNoteMsgTxt: {
        color: theme.colors.text.normal,
        fontSize: theme.fontSizes.name,
        fontFamily: theme.fonts.title
    },
    shopChartNoteIcon: {
        marginTop: 10,
        marginLeft: 10
    }
});
