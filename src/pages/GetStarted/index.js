import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button} from '../../components';

export default function GetStarted() {
  return (
    <ImageBackground style={styles.page} source={ILGetStarted}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title={'Get Started'} type={'secondary'} />
        <View style={{height: 10}}></View>
        <Button title={'Sign In'} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginTop: 110,
    lineHeight: 40,
  },
});
