import {
    View,
    Text,
    StatusBar,
    Button,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
} from "react-native";
import React from "react";
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { globalStyles, myTheme } from "../utils/globalStyle";
import { IconButton } from "react-native-paper";
import OrderDetails from "../components/data/OrderDetails";

const ThankScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    return (
        <>
            <View
                style={[
                    globalStyles.container,
                    {
                        backgroundColor: myTheme.color.primary,
                        paddingTop: 144,
                        // paddingBottom: insets.bottom,
                        // paddingLeft: insets.left,
                        // paddingRight: insets.right,
                    },
                ]}
            >
                <Pressable
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{ position: "absolute", top: 64, left: 20 }}
                >
                    <Image
                        style={{
                            resizeMode: "contain",
                            height: 30,
                            width: 36,
                        }}
                        source={require("../assets/images/logo.png")}
                    />
                </Pressable>
                <View style={{ paddingBottom: 32, marginTop: StatusBar }}>
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
                                { color: myTheme.color.white, maxWidth: 272 },
                            ]}
                        >
                            Thank you for obtaining your visitor pass.
                        </Text>
                    </View>
                </View>
                <OrderDetails />
            </View>
        </>
    );
};

export default ThankScreen;
