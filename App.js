import * as React from "react";

import { AppRegistry, View } from "react-native";
import {
    PaperProvider,
    MD3LightTheme,
    configureFonts,
    DefaultTheme,
} from "react-native-paper";
import StackNavigator from "./app/components/StackNavigator";
import { useFonts } from "expo-font";
import { myTheme } from "./app/utils/globalStyle";

export default function App() {
    const [fontsLoaded] = useFonts({
        Arimo: require("./app/assets/fonts/Arimo-Regular.ttf"),
    });
    if (!fontsLoaded) {
        console.log("not loaded");
    } else {
        console.log("loaded");
    }
    const fontConfig = {
        customVariant: {
            fontFamily: Platform.select({
                web: 'Arimo, "Helvetica Neue", Helvetica, Arial, sans-serif',
                ios: "Arimo",
                default: "Arimo",
            }),
        },
    };
    const theme = {
        ...MD3LightTheme,

        colors: {
            ...MD3LightTheme.colors,
            primary: myTheme.color.primary,
            secondary: myTheme.color.secondary,
            onSurface: myTheme.color.onSurface,
            onSurfaceVariant: myTheme.color.primary,
        },
        fonts: configureFonts({ config: fontConfig }),
    };

    return (
        <PaperProvider theme={theme}>
            <StackNavigator />
        </PaperProvider>
    );
}
