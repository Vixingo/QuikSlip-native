import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
    backButton: {
        position: "absolute",
        width: 32,
        height: 32,
        top: Platform.OS == "android" ? StatusBar.currentHeight : 60,
        left: 20,
    },
    textinput: { height: 40 },
});

export const myTheme = {
    color: {
        primary: "#186FE7",
        secondary: "#ffcc33",
        tertiary: "#CACACA",
        white: "#ffffff",
        textColor: "#282828",
    },
};
