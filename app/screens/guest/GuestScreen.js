import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import { Button, Divider, Text } from "react-native-paper";
import Heading2 from "../../components/texts/Heading2";
import C2iconButton from "../../components/buttons/C2iconButton";
import { useNavigation } from "@react-navigation/native";

const GuestScreen = () => {
    const [modify, setModified] = useState(true);
    const navigation = useNavigation();
    return (
        <ProfileLayout>
            <Heading2
                title="Guest Profiles"
                subtitle={
                    "Here you find all the guest profiles you created for ease of access to obtain a parking pass."
                }
            />
            <View style={{ gap: 16, marginTop: 16 }}>
                <C2iconButton
                    label="Eric Brown"
                    icon={"star-outline"}
                    mode={"outlined"}
                    color={"#000000"}
                />
                <C2iconButton
                    label="Thom Hunt"
                    icon={"star-outline"}
                    mode={"outlined"}
                    op={() => {
                        navigation.navigate("modifyGuest");
                    }}
                />
                {modify ? (
                    <C2iconButton
                        label="Add Guest"
                        icon={"account-plus"}
                        mode={"contained"}
                        op={() => {
                            navigation.navigate("addGuest");
                        }}
                    />
                ) : (
                    ""
                )}
                <Divider style={{ marginVertical: 8 }} />
                {modify ? (
                    <C2iconButton
                        label="Modify Guest Profile"
                        icon={"pencil"}
                        mode={"outlined"}
                        color={"#595959"}
                        op={() => {
                            setModified(!modify);
                        }}
                    />
                ) : (
                    <C2iconButton
                        label="Cancel"
                        icon={"close"}
                        mode={"outlined"}
                        color={"#595959"}
                        right={true}
                        op={() => {
                            setModified(!modify);
                        }}
                    />
                )}
            </View>
        </ProfileLayout>
    );
};

export default GuestScreen;
