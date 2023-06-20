import { View, Text, ScrollView } from "react-native";
import React from "react";
import ComplexTop from "../components/Cards/ComplexTop";
import Heading from "../components/texts/Heading";
import CustomTextInput from "../components/forms/CustomTextInput";
import CpButton from "../components/buttons/CpButton";
import { Button, IconButton } from "react-native-paper";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { myTheme } from "../utils/globalStyle";
import C2iconButton from "../components/buttons/C2iconButton";
import { useNavigation } from "@react-navigation/native";
import ProfileLayout from "../components/layouts/ProfileLayout";
const TntDashScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <ComplexTop />
            <ProfileLayout>
                <View
                    style={{ gap: 24, marginVertical: 16, paddingBottom: 30 }}
                >
                    <Heading
                        title="Common Guest Profile"
                        subtitle="Register your vehicle with the required information below."
                        chip="See Rules"
                    />
                    <C2iconButton
                        label="Common Guest Profile"
                        icon={"human-greeting-variant"}
                        mode="contained"
                        op={() => {
                            navigation.navigate("commonGuest");
                        }}
                    />

                    <Heading
                        title={"Add Personal Vehicle"}
                        subtitle="Need to register a second vehicle to your account? Add the vehicle by pressing the button."
                    />
                    <C2iconButton
                        label="Add Vehicle"
                        icon={"car"}
                        mode="outlined"
                        op={() => {
                            navigation.navigate("userVehicle");
                        }}
                    />
                    <Heading
                        title="Modify Account Details"
                        subtitle={
                            "New email? New phone number? Change it here when anything changes in your life!"
                        }
                    />
                    <C2iconButton
                        label="Modify Account Details"
                        icon={"pencil"}
                        mode="outlined"
                        op={() => {
                            navigation.navigate("setting");
                        }}
                    />
                </View>
            </ProfileLayout>
        </ScrollView>
    );
};

export default TntDashScreen;
