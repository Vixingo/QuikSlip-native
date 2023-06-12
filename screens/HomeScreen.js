import React from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View>
            <Button
                title="Get Guest Pass"
                onPress={() => {
                    navigation.navigate("GuestPass");
                }}
            />
            <Button
                title="Modify Pass"
                onPress={() => {
                    navigation.navigate("Modify");
                }}
            />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         fontSize: 50,
//         color: "red",
//         fontWeight: 700,
//     },
// });

export default HomeScreen;
