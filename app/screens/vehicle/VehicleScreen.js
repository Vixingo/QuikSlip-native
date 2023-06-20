import { View } from "react-native";
import React from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import { Button, Text } from "react-native-paper";
import Heading2 from "../../components/texts/Heading2";
import C2iconButton from "../../components/buttons/C2iconButton";

const VehicleScreen = () => {
    return (
        <ProfileLayout>
            <Heading2
                title="Guest Profiles"
                subtitle={
                    "Here you find all the guest profiles you created for ease of access to obtain a parking pass."
                }
            />

            <C2iconButton label="Eric Brown" icon={"star-outline"} />
            <C2iconButton label="Eric Brown" icon={"star-outline"} />
        </ProfileLayout>
    );
};

export default VehicleScreen;
