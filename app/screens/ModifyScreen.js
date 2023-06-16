import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-paper";

function ModifyScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 100, fontWeight: 700, color: "purple" }}>
                Modify Screen
            </Text>
            <Button
                icon="camera"
                mode="contained"
                onPress={() => console.log("Pressed")}
            >
                Press me
            </Button>
        </View>
    );
}

export default ModifyScreen;
