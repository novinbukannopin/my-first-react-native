import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkontribusi</Text>
      <Input label={'Email'} />
      <Gap height={24} />
      <Input label={'Password'} />
      <Gap height={12} />
      <Link title={'Forgot password'} size={12} />
      <Gap height={40} />
      <Button title={'Sign in'} />
      <Gap height={32} />
      <Link title={'Create new Account'} size={16} align={'center'} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: 'white', flex: 1},
  text: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
