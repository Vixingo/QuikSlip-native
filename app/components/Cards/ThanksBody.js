import { View, Text, LogBox } from "react-native";
import React from "react";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import { Image } from "expo-image";
import CpButton from "../buttons/CpButton";
import { useNavigation } from "@react-navigation/native";

const ThanksBody = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                // backgroundColor: myTheme.color.red,
                paddingVertical: 24,
                flex: 1,
            }}
        >
            <View style={globalStyles.pxWrap}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 400,
                    }}
                >
                    We’re sending an email to confirm the creation of your
                    account. It serves as a record of your account. Please keep
                    it!
                </Text>
                <Text
                    style={{
                        marginTop: 16,
                        marginBottom: 32,
                        fontSize: 16,
                    }}
                >
                    Thanks again!
                </Text>
                <Image
                    source={require("../../assets/images/wLogo.png")}
                    height={48}
                    contentFit="contain"
                    contentPosition={"left"}
                    style={{ marginBottom: 40 }}
                />
                <CpButton
                    label={"To Tenant Dashboard"}
                    mode={"contained"}
                    op={() => {
                        navigation.navigate("tntDash");
                    }}
                />
            </View>
        </View>
    );
};

export default ThanksBody;
