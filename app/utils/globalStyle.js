import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
    pxWrap: {
        paddingLeft: 20,
        paddingHorizontal: 20,
    },

    backButton: {
        position: "absolute",
        width: 32,
        height: 32,
        top: Platform.OS == "android" ? StatusBar.currentHeight : 60,
        left: 20,
    },

    textinput: { height: 40, borderRadius: 8 },
    h1: {
        fontSize: 32,
        fontWeight: 700,
    },
    h2: {
        fontSize: 24,
        fontWeight: 700,
    },
    h3: {
        fontSize: 20,
        fontWeight: 700,
    },
    h6: { fontSize: 16, fontWeight: 400 },
    chip: {
        backgroundColor: "#186FE7",
        color: "#fff",
        fontSize: 14,
        fontWeight: 700,
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 8,
        overflow: "hidden",
        marginLeft: 16,
    },
    chip2: {
        backgroundColor: "#cacaca",
        fontSize: 14,
        fontWeight: 400,
        padding: 4,
        borderRadius: 8,
        overflow: "hidden",
    },
    pill: {
        // backgroundColor: "#186FE7",
        fontSize: 14,
        color: "#fff",
        fontWeight: 400,
        padding: 0,
        margin: 0,
        marginHorizontal: 2,
        marginVertical: 2,
        marginRight: 10,
        // width: 156,
    },
    cbtn1: {
        borderRadius: 8,
        minHeight: 48,
        marginBottom: 16,
        justifyContent: "center",
    },

    csButton: {
        borderRadius: 8,
        minHeight: 48,
        justifyContent: "center",
    },
    cpButton: {
        borderRadius: 8,
        minHeight: 48,
        justifyContent: "center",
    },
});

export const myTheme = {
    color: {
        primary: "#186FE7",
        secondary: "#ffcc33",
        tertiary: "#CACACA",
        white: "#ffffff",
        red: "#ff0000",
        back: "#f5f5f5",
        outline: "#186FE7",
        grey: "#969696",
        onSurface: "#282828", //text color
        textColor: "#282828",
    },
};
