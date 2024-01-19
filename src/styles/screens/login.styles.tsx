
import { StyleSheet } from 'react-native';

import { theme } from '../../infrastructure/Theme';

export const loginStyle = StyleSheet.create({
    upperBg: {
        flex: 1,
        height: 400,
        justifyContent: 'center'
    },
    darkBg: {
        backgroundColor: "black"
    },
    headerBox: {
        flex: 1,
        height: 400,
    },
    headerText: {
        textAlign: "center",
        fontSize: theme.fontSizes.h4,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowRadius: 5,
        marginTop: theme.space[10]
    },
    formContainer: {
        backgroundColor: "white",
        marginTop: -12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    }
})
