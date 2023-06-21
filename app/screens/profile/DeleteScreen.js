import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import CustomCheckBox from "../../components/forms/CustomCheckBox";
import CpButton from "../../components/buttons/CpButton";
import { Button, Text } from "react-native-paper";
import { globalStyles } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";
import TextButton from "../../components/buttons/TextButton";

const DeleteScreen = () => {
    const navigation = useNavigation();

    const [check, setCheck] = useState({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
    });

    return (
        <ProfileLayout>
            <Heading2
                title={"Delete Account"}
                subtitle={
                    "Why do you want to delete your account? Select all that apply to you."
                }
            />
            <View style={{ gap: 8, marginVertical: 32 }}>
                <CustomCheckBox
                    label={"I’m moving"}
                    icon={check.check1 ? "check" : ""}
                    op={() => {
                        setCheck({ ...check, check1: !check.check1 });
                    }}
                />
                <CustomCheckBox
                    label={"I don’t have a car / motorcycle anymore"}
                    icon={check.check2 ? "check" : ""}
                    op={() => {
                        setCheck({ ...check, check2: !check.check2 });
                    }}
                />
                <CustomCheckBox
                    label={"I don’t need an account anymore"}
                    icon={check.check3 ? "check" : ""}
                    op={() => {
                        setCheck({ ...check, check3: !check.check3 });
                    }}
                />
                <CustomCheckBox
                    label={"I don’t like this app"}
                    icon={check.check4 ? "check" : ""}
                    op={() => {
                        setCheck({ ...check, check4: !check.check4 });
                    }}
                />
            </View>
            <CpButton
                label={"CONTINUE"}
                mode={"contained"}
                op={() => {
                    navigation.popToTop();
                }}
            />
            <TextButton
                label={"Skip"}
                op={() => {
                    navigation.goBack();
                }}
                textColor={"#969696"}
            />
        </ProfileLayout>
    );
};

export default DeleteScreen;
