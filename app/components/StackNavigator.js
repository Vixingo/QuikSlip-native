import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import {
    Button,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import GuestPassScreen from "../screens/GuestPassScreen";
import ModifyScreen from "../screens/ModifyScreen";
import useAuth from "../hooks/useAuth";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
function StackNavigator() {
    const { user } = useAuth();
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <NavigationContainer>
                <Stack.Navigator>
                    {!user ? (
                        <>
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
                            {/* delete this login in production build */}
                            <Stack.Screen
                                name="Login"
                                options={{
                                    title: "Login",
                                    // headerTransparent: true,
                                    // headerShadowVisible: false,
                                }}
                                component={WelcomeScreen}
                            />
                        </>
                    ) : (
                        <Stack.Screen
                            name="Login"
                            options={{
                                title: "Login",
                                // headerTransparent: true,
                                // headerShadowVisible: false,
                            }}
                            component={WelcomeScreen}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
});

export default StackNavigator;
