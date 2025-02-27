import React from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButton() {
    return (
        <>
            <BatTextInput />
            <Pressable
                style={styles.button}
                onPress={() => { console.log("foi pressionado") }}
            >
                <Text style={styles.text}>Generate</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => { console.log("foi pressionado") }}
            >
                <Text style={styles.text}>🥸Copy</Text>
            </Pressable>
        </>
    );
}