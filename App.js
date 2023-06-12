import {
    Button,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import GuestPassScreen from "./screens/GuestPassScreen";
import ModifyScreen from "./screens/ModifyScreen";

import { PaperProvider } from "react-native-paper";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Dev Console",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen
                    name="GuestPass"
                    options={{
                        title: "",
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                    component={GuestPassScreen}
                />
                <Stack.Screen
                    name="Modify"
                    options={{
                        title: "",
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                    component={ModifyScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
});
