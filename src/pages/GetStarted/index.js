import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground style={styles.page} source={ILGetStarted}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title={'Get Started'}
          type={'secondary'}
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button title={'Sign In'} onPress={() => navigation.replace('Login')} />
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
    color: 'white',
    marginTop: 110,
    lineHeight: 40,
    fontFamily: 'Nunito-SemiBold',
  },
});
