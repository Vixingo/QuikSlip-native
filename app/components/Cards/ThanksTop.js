import { View, Text, Pressable } from "react-native";
import React from "react";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import { Image } from "expo-image";
import { IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const ThanksTop = () => {
    const navigation = useNavigation();

    return (
        <View
            style={[
                // globalStyles.container,
                {
                    backgroundColor: myTheme.color.primary,
                    paddingTop: 144,
                    // maxHeight: 392,
                    // paddingBottom: insets.bottom,
                    // paddingLeft: insets.left,
                    // paddingRight: insets.right,
                },
            ]}
        >
            <Pressable
                onPress={() => {
                    navigation.popToTop();
                }}
                style={{ position: "absolute", top: 64, left: 20 }}
            >
                <Image
                    contentFit="contain"
                    style={{
                        height: 30.18,
                        width: 36,
                    }}
                    source={require("../../assets/images/logo.png")}
                />
            </Pressable>
            <View
                style={{
                    paddingBottom: 32,
                    marginTop: StatusBar.currentHeight,
                }}
            >
                <IconButton
                    icon={"check-circle-outline"}
                    size={48}
                    iconColor={myTheme.color.white}
                />
                <View style={globalStyles.pxWrap}>
                    <Text
                        style={[
                            globalStyles.h6,
                            {
                                color: myTheme.color.white,
                                marginVertical: 16,
                            },
                        ]}
                    >
                        Hi Eric Brown,
                    </Text>
                    <Text
                        style={[
                            globalStyles.h1,
                            {
                                color: myTheme.color.white,
                                maxWidth: 272,
                            },
                        ]}
                    >
                        Thank you for obtaining your visitor pass.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ThanksTop;
