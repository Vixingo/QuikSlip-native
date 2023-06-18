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

const ThankScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <>
            <ScrollView>
                <ThanksTop />
                <OrderDetails />
            </ScrollView>
        </>
    );
};

export default ThankScreen;
