import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Button({type, title}) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : `#0AA8B0`,
    paddingVertical: 16,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'secondary' ? '#0AA8B0' : `white`,
  }),
});
