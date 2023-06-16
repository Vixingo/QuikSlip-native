import { View } from "react-native";
import React from "react";
import {
    Chip,
    Button,
    Text,
    TextInput,
    Checkbox,
    IconButton,
} from "react-native-paper";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import CustomTextInput from "./CustomTextInput";

const GuestReg = ({ formData, setFormData }) => {
    const [text, setText] = React.useState("");
    const [focus, setFocus] = React.useState(false);

    const [checked, setChecked] = React.useState(false);
    return (
        <View style={{ gap: 16, paddingLeft: 20, paddingRight: 20 }}>
            <View>
                <Text variant="headlineMedium">Guest Parking Pass</Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Text>Obtain a digital permit pass.</Text>
                    <Chip
                        style={{
                            backgroundColor: "#CACACA",
                        }}
                    >
                        See Rules
                    </Chip>
                </View>
            </View>
            <CustomTextInput
                label="Car Make and Model"
                icon="steering"
                value={formData.car}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        car: e,
                    })
                }
            />
            <CustomTextInput
                label="License Plate"
                icon="car-side"
                value={formData.license}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        license: e,
                    })
                }
            />
            <CustomTextInput
                label="Name"
                icon="rename-box"
                value={formData.name}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        name: e,
                    })
                }
            />
            <CustomTextInput
                label="Email"
                icon="email-outline"
                value={formData.email}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        email: e,
                    })
                }
            />
            <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
                <View
                    style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        width: 24,
                        height: 24,
                        borderColor: myTheme.color.primary,
                        backgroundColor: myTheme.color.white,
                    }}
                >
                    <IconButton
                        icon={checked ? "check" : ""}
                        iconColor={myTheme.color.primary}
                        size={24}
                        style={{
                            position: "absolute",
                            top: -15,
                            left: -15,
                        }}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                </View>
                <Text style={{ fontSize: 16, color: myTheme.color.primary }}>
                    I agree to receive a confirmation email
                </Text>
            </View>
            <Button
                mode="contained"
                onPress={() => {
                    console.log(formData);
                }}
            >
                REGISTER VEHICLE
            </Button>
        </View>
    );
};

export default GuestReg;
