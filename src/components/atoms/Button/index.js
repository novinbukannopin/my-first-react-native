import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils';

export default function Button({type, title, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? Colors.button.secondary.background
        : Colors.button.primary.background,
    paddingVertical: 16,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    // fontWeight: '600',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color:
      type === 'secondary'
        ? Colors.button.secondary.text
        : Colors.button.primary.text,
  }),
});
