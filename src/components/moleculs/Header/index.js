import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';
import {Gap} from '../../atoms';
import {Colors} from '../../../utils';

export default function Header() {
  return (
    <View style={styles.container}>
      <IconBack />
      <Text style={styles.text}>Header</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-Semibold',
    color: Colors.text.primary,
  },
});
