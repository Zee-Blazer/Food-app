
import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../infrastructure/Theme';

const { width, height } = Dimensions.get("window");

export const loginStyle = StyleSheet.create({
    upperBg: {
        flex: 1,
        height: 365,
        justifyContent: 'center'
    },
    darkBg: {
        backgroundColor: "black"
    },
    headerBox: {
        flex: 1,
        height: 300,
        marginTop: theme.space[12],
    },
    headerText: {
        textAlign: "center",
        fontSize: theme.fontSizes.h4,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowRadius: 5,
        fontFamily: theme.fonts.title
    },
    headerPara: {
        textAlign: "center",
        fontSize: theme.fontSizes.medium,
        marginTop: theme.space[2],
        color: "white",
        fontFamily: theme.fonts.body
    },
    formContainer: {
        backgroundColor: "white",
        marginTop: -12,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: height *0.7,
        paddingVertical: theme.space[9],
        paddingHorizontal: theme.space[9]
    }
})
