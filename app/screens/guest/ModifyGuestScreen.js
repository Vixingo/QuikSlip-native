import { View } from "react-native";
import React from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import CustomTextInput from "../../components/forms/CustomTextInput";
import CpButton from "../../components/buttons/CpButton";

import {
    Button,
    Dialog,
    Portal,
    PaperProvider,
    Text,
} from "react-native-paper";
import { globalStyles } from "../../utils/globalStyle";
const ModifyGuestScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    return (
        <ProfileLayout>
            <Heading2
                title="Modify Guest Profile"
                subtitle={
                    "Need to update your guest email? Update all the information here."
                }
            />
            <View style={{ gap: 40, marginTop: 24 }}>
                <CustomTextInput label={"Name"} icon={"rename-box"} />
                <CustomTextInput label={"Email"} icon={"email-outline"} />
                <CpButton label={"SAVE CHANGES"} mode={"contained"} />
                <Button
                    labelStyle={{
                        fontSize: 16,
                        fontWeight: 700,
                        textDecorationLine: "underline",
                    }}
                    onPress={showDialog}
                >
                    Delete Guest Profile
                </Button>

                <Portal>
                    <Dialog
                        visible={visible}
                        onDismiss={hideDialog}
                        style={globalStyles.Dialog}
                    >
                        <Dialog.Title style={{ margin: 0 }}>
                            <Text
                                style={[
                                    globalStyles.h3,
                                    { textAlign: "center" },
                                ]}
                            >
                                Delete Eric Brown
                            </Text>
                        </Dialog.Title>
                        <Dialog.Content>
                            <Text
                                style={[
                                    globalStyles.h7,
                                    {
                                        textAlign: "center",

                                        alignSelf: "center",
                                    },
                                ]}
                            >
                                Are you sure you want to delete Eric Brown
                                profile from your account?{" "}
                            </Text>
                        </Dialog.Content>
                        <Dialog.Actions
                            style={{
                                justifyContent: "space-evenly",
                                alignItems: "stretch",
                            }}
                        >
                            <Button
                                mode="outlined"
                                style={globalStyles.DialogBtn}
                                onPress={hideDialog}
                            >
                                NO
                            </Button>
                            <Button
                                mode="contained"
                                style={globalStyles.DialogBtn}
                                onPress={hideDialog}
                            >
                                YES
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </ProfileLayout>
    );
};

export default ModifyGuestScreen;
