import React from "react";
import { StyleSheet, View, Alert, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import CpButton from "../components/buttons/CpButton";

function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                gap: 4,
                paddingLeft: 20,
                paddingRight: 20,
            }}
        >
            <CpButton
                label={"2A,Guest Pass"}
                mode="contained"
                op={() => {
                    navigation.navigate("guestPass");
                }}
            />
            <CpButton
                label={"2B,Expired"}
                mode="contained"
                op={() => {
                    navigation.navigate("expired");
                }}
            />
            <CpButton
                label={"2C,Tenant"}
                mode="contained"
                op={() => {
                    navigation.navigate("tenant");
                }}
            />
            <CpButton
                label={"3,Tenant Dashboard"}
                mode="contained"
                op={() => {
                    navigation.navigate("tntDash");
                }}
            />
            <CpButton
                label={"4,Modify/Add Guest"}
                mode="contained"
                op={() => {
                    navigation.navigate("commonGuest", {
                        show: "guest",
                        title: "Guest",
                    });
                }}
            />
            <CpButton
                label={"5,Modify/Add Car"}
                mode="contained"
                op={() => {
                    navigation.navigate("commonGuest", {
                        show: "car",
                        title: "car",
                    });
                }}
            />
            <CpButton
                label={"Thank You obtain"}
                mode="contained"
                op={() => {
                    navigation.navigate("thankYou", { being: "obtain" });
                }}
            />
            {/* <CpButton
                label={"Modify Pass"}
                mode="contained"
                op={() => {
                    navigation.navigate("modify");
                }}
            /> */}

            <CpButton
                label={"Login"}
                mode="contained"
                op={() => {
                    navigation.navigate("login");
                }}
            />
            <CpButton
                label={"Overview"}
                mode="contained"
                op={() => {
                    navigation.navigate("overview");
                }}
            />

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
