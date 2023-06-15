import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';

export default function SplashScreen() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Halo Dok</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: `#112340`,
    marginTop: 20,
  },
});
