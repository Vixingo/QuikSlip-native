import { Image } from "expo-image";
import React from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

function ModifyScreen() {
    return (
        <View>
            <Image source={{}} />
            <Text style={{ fontSize: 100, fontWeight: 700, color: "purple" }}>
                Hello Shafin, How are you brother?
            </Text>
            <Button
                title="Send Message"
                onPress={() => {
                    Alert.alert("I love you");
                }}
            />
        </View>
    );
}

export default ModifyScreen;
