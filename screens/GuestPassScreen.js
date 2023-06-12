import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    ImageBackground,
} from "react-native";

function GuestPassScreen() {
    return (
        <>
            <View>
                <ImageBackground
                    style={styles.background}
                    source={require("../assets/images/complex_bg.png")}
                    resizeMode="cover"
                >
                    <Text>Inside</Text>
                    <Text
                        style={{
                            fontSize: 100,
                            fontWeight: 700,
                            color: "purple",
                        }}
                    >
                        Hello Promit
                    </Text>
                </ImageBackground>
            </View>
            <Button
                title="Send Message"
                onPress={() => {
                    Alert.alert("I love you");
                }}
            />
        </>
    );
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 360,
    },
    background: {
        background:
            "linear-gradient(360deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
    },
});

export default GuestPassScreen;
