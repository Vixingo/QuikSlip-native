import { View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { myTheme } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";

const C2iconButton = ({ label, icon, mode, op, color, right }) => {
    return (
        <Button
            style={{
                borderRadius: 8,
                borderColor: color ? color : myTheme.color.primary,
            }}
            mode={mode}
            buttonColor={
                mode === "contained"
                    ? myTheme.color.primary
                    : myTheme.color.white
            }
            labelStyle={{
                marginVertical: 8,
                marginTop: 12,
                marginHorizontal: 16,
            }}
            onPress={op}
        >
            <View
                style={{
                    // marginTop: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <MaterialCommunityIcons
                    name={icon}
                    size={32}
                    color={
                        mode === "contained"
                            ? myTheme.color.white
                            : color
                            ? color
                            : myTheme.color.primary
                    }
                />
                <Text
                    style={{
                        color:
                            mode === "contained"
                                ? myTheme.color.white
                                : color
                                ? color
                                : myTheme.color.primary,
                        fontSize: 20,
                        marginLeft: 16,
                        flex: 1,
                    }}
                >
                    {label}
                </Text>
                {right ? (
                    ""
                ) : (
                    <AntDesign
                        name="right"
                        size={32}
                        color={
                            mode === "contained"
                                ? myTheme.color.white
                                : color
                                ? color
                                : myTheme.color.primary
                        }
                    />
                )}
            </View>
        </Button>
    );
};

export default C2iconButton;
