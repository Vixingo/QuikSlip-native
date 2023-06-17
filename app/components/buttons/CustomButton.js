import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { globalStyles } from "../../utils/globalStyle";

const CustomButton = ({}) => {
    return (
        <Button
            style={globalStyles.cbtn1}
            // icon="camera"
            mode="contained"
            onPress={() => console.log("Pressed")}
        >
            Press me
        </Button>
    );
};

export default CustomButton;
