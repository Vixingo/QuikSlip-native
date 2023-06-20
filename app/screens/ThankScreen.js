import {
    View,
    Text,
    StatusBar,
    Button,
    StyleSheet,
    Pressable,
    ScrollView,
} from "react-native";
import React from "react";
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { globalStyles, myTheme } from "../utils/globalStyle";
import { IconButton } from "react-native-paper";
import OrderDetails from "../components/data/OrderDetails";
import { Image } from "expo-image";
import ThanksTop from "../components/Cards/ThanksTop";

import ThanksBody from "../components/Cards/ThanksBody";

const ThankScreen = ({ navigation, route }) => {
    const insets = useSafeAreaInsets();
    /* 2. Get the param */
    const { being } = route.params;
    console.log(route);
    return (
        <>
            <ScrollView>
                {being === "register" ? (
                    <>
                        <ThanksTop
                            name={"Eric Brown"}
                            msg={"registering yourself and vehicle."}
                        />
                        <ThanksBody />
                    </>
                ) : being === "invite" ? (
                    <>
                        {/* <ThanksTop /> */}
                        {/* <OrderDetails /> */}
                    </>
                ) : (
                    <>
                        <ThanksTop
                            name={"Eric Brown"}
                            msg={"obtaining your visitor pass."}
                        />
                        <OrderDetails />
                    </>
                )}
            </ScrollView>
        </>
    );
};

export default ThankScreen;
