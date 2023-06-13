import { Image } from "expo-image";
import React from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

function ModifyScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 100, fontWeight: 700, color: "purple" }}>
                Modify Screen
            </Text>
        </View>
    );
}

export default ModifyScreen;
