import { View, Text, Pressable } from "react-native";
import React from "react";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import { Image } from "expo-image";
import { IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const ThanksTop = ({ name, msg, being }) => {
    const navigation = useNavigation();

    return (
        <View
            style={[
                // globalStyles.container,
                {
                    backgroundColor: myTheme.color.primary,
                    paddingTop: 144,
                    marginBottom: being ? 80 : 0,
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
            {being != "invite" ? (
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
                            Hi {name},
                        </Text>
                        <Text
                            style={[
                                globalStyles.h1,
                                {
                                    color: myTheme.color.white,
                                    maxWidth: 300,
                                },
                            ]}
                        >
                            Thank you for {msg}
                        </Text>
                    </View>
                </View>
            ) : (
                <View>
                    <Image
                        height={264}
                        contentFit="contain"
                        transition={1000}
                        contentPosition={"center"}
                        source={require("../../assets/images/mail.png")}
                        style={{
                            flex: 1,
                            width: "100%",
                            bottom: -25,
                        }}
                    />
                </View>
            )}
        </View>
    );
};

export default ThanksTop;
