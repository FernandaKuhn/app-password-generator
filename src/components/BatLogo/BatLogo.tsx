import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyle';
import batLogo from '../../../assets/batman-logo.png';

export function BatLogo() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image source={batLogo} />
    </View>
  );
}