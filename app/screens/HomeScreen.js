import React from "react";
import { StyleSheet, Text, View, Alert, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-evenly",
                paddingLeft: 20,
                paddingRight: 20,
            }}
        >
            <Button
                mode="contained"
                onPress={() => {
                    navigation.navigate("guestPass");
                }}
            >
                <Text>Get Guest Pass</Text>
            </Button>
            <Button
                mode="contained"
                onPress={() => {
                    navigation.navigate("thankYou");
                }}
            >
                Thank You{" "}
            </Button>
            <Button
                icon="camera"
                mode="contained"
                onPress={() => {
                    navigation.navigate("modify");
                }}
            >
                Modify Pass{" "}
            </Button>

            <Button
                icon="camera"
                mode="contained"
                onPress={() => {
                    navigation.navigate("login");
                }}
            >
                Login{" "}
            </Button>

            {/* <Button
                title="Modify Pass"
                onPress={() => {
                    navigation.navigate("Modify");
                }}
            />
            <Button
                title="Login as welcome"
                onPress={() => {
                    navigation.navigate("Login");
                }}
            /> */}
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
