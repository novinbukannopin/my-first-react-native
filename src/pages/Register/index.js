import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {Colors} from '../../utils';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Input label={'Full Name'} />
        <Gap height={20} />
        <Input label={'Pekerjaan'} />
        <Gap height={20} />
        <Input label={'Email Address'} />
        <Gap height={20} />
        <Input label={'Password'} />
        <Gap height={24} />
        <Button title={'Continue'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: Colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
