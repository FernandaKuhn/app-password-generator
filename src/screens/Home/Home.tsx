import React from "react";
import { Text, View } from "react-native";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { StatusBar } from "expo-status-bar";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";

export default function Home() {
    return (

        <View style={styles.appContainer}>

            <View style={[styles.logoContainer]}>
                <BatLogo />
            </View>
            <View style={[styles.inputContainer]}>
                <BatTextInput />
            </View>

            <Text>Password Generator!aaaaaaaaaaaaaa</Text>

            <StatusBar style="light" />
        </View>
    );
}

