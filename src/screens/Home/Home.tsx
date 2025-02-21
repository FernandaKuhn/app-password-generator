import React from "react";
import { Text, View } from "react-native";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { StatusBar } from "expo-status-bar";

export default function Home() {
    return (

        <View style={styles.container}>

            <View style={[styles.logoContainer, { width: 150, height: 150 }]}>
                <BatLogo />
            </View>

            <Text>Password Generator!aaaaaaaaaaaaaa</Text>
            <Text>Password Generator!aaaaaaaaaaaaaa</Text>
            <Text>Password Generator!aaaaaaaaaaaaaa</Text>
            <Text>Password Generator!aaaaaaaaaaaaaa</Text>
            <StatusBar style="auto" />
        </View>
    );
}

