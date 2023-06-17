import React from "react";
import {
    StyleSheet,
    View,
    Alert,
    Image,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";

import { TextInput, Text, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import BackButton from "../components/buttons/BackButton";
import GuestReg from "../components/forms/GuestReg";
import { myTheme } from "../utils/globalStyle.js";
function GuestPassScreen({ navigation }) {
    const [formdata, setFormdata] = React.useState({
        car: "",
        license: "",
        name: "",
        email: "",
        check1: "",
        check2: "",
    });
    return (
        <>
            <ScrollView>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "#f5f5f5",
                                gap: 16,
                            }}
                        >
                            <ImageBackground
                                style={styles.image}
                                source={require("../assets/images/complex_bg.png")}
                                resizeMode="cover"
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: "flex-end",
                                        paddingLeft: 20,
                                        paddingBottom: 16,
                                        backgroundColor:
                                            "linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
                                    }}
                                >
                                    <Text
                                        variant="headlineSmall"
                                        style={{
                                            color: myTheme.color.white,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Dallas Fort Worth Complex
                                    </Text>
                                    <Text
                                        variant="bodyMedium"
                                        style={{
                                            color: myTheme.color.white,
                                        }}
                                    >
                                        <Ionicons
                                            name="location-sharp"
                                            size={16}
                                            color="white"
                                        />{" "}
                                        1111 Eric Brown Ave, Dallas, TX 15900
                                    </Text>
                                </View>
                            </ImageBackground>

                            <GuestReg
                                formData={formdata}
                                setFormData={setFormdata}
                                navigation={navigation}
                            />
                        </View>

                        {/* <BackButton /> */}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 360,
        backgroundColor:
            "linear-gradient(30deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
    },
});

export default GuestPassScreen;
