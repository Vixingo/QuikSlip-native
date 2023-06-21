import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import { Button, Divider, Text } from "react-native-paper";
import Heading2 from "../../components/texts/Heading2";
import C2iconButton from "../../components/buttons/C2iconButton";
import { useNavigation } from "@react-navigation/native";

const GuestScreen = ({ route }) => {
    const [modify, setModified] = useState(true);
    const navigation = useNavigation();

    const { show, title, subtitle } = route.params;
    const user = [
        {
            name: "Thom Hunt",
            email: "tom@hu.com",
        },
        { name: "Eric Brown", email: "tom@hu.com" },
    ];
    return (
        <ProfileLayout>
            <Heading2
                title={modify ? title : "Modify " + title}
                subtitle={subtitle}
            />
            <View style={{ gap: 16, marginTop: 16 }}>
                {user.map((d) => {
                    <Text>{d.name}</Text>;
                })}

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
                {show == "car" ? (
                    ""
                ) : modify ? (
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
