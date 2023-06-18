import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../utils/globalStyle";
import CpButton from "../components/buttons/CpButton";
import { Image } from "expo-image";

const ExpiredScreen = ({ navigation }) => {
    return (
        <View
            style={[
                globalStyles.container,
                {
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 40,
                },
            ]}
        >
            <Image
                contentFit="contain"
                style={{
                    height: 264,
                    width: 264,
                }}
                source={require("../assets/images/dude.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 24 }}>
                Parking Pass Link Expired
            </Text>
            <Text
                style={{ fontWeight: 300, fontSize: 20, textAlign: "center" }}
            >
                Ooops, The link to your parking pass has either expired or
                already been obtained. Don’t worry, you will need your friend to
                resend the link.
            </Text>
            <CpButton
                label={"GO TO HOMEPAGE"}
                mode={"contained"}
                op={() => {
                    navigation.popToTop();
                }}
            />
        </View>
    );
};

export default ExpiredScreen;
