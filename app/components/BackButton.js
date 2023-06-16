import * as React from "react";

import { useNavigation } from "@react-navigation/native";
import { Button, IconButton } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { globalStyles } from "../utils/globalStyle";

export default function BackButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={globalStyles.backButton}
            onPress={() => {
                navigation.goBack();
            }}
        >
            <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
    );
}
