import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton, PaperProvider } from "react-native-paper";
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
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import GuestPassScreen from "../screens/GuestPassScreen";
import ModifyScreen from "../screens/ModifyScreen";
import useAuth from "../hooks/useAuth";
import WelcomeScreen from "../screens/WelcomeScreen";
import ThankScreen from "../screens/ThankScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { globalStyles, myTheme } from "../utils/globalStyle";
import BackButton from "../components/buttons/BackButton";

function StackNavigator() {
    const Stack = createNativeStackNavigator();
    const { user } = useAuth();
    // const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {!user ? (
                        <>
                            <Stack.Screen
                                name="home"
                                component={HomeScreen}
                                options={{
                                    title: "",
                                }}
                            />

                            <Stack.Screen
                                name="guestPass"
                                options={{
                                    title: "",
                                    headerTransparent: true,
                                    headerBackTitleVisible: false,
                                    headerLeft: () => <BackButton />,
                                }}
                                component={GuestPassScreen}
                            />
                            <Stack.Screen
                                name="modify"
                                options={{
                                    title: "",
                                    headerTransparent: true,
                                    headerShadowVisible: false,
                                    headerLeft: () => <BackButton />,
                                }}
                                component={ModifyScreen}
                            />
                            <Stack.Screen
                                name="thankYou"
                                component={ThankScreen}
                                options={{
                                    headerTransparent: true,
                                    headerShown: false,
                                }}
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
        </SafeAreaProvider>
    );
}

export default StackNavigator;
