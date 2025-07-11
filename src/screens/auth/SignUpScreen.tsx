import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { CustomInput } from '../../components/inputs/CustomInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../../store/authStore';
import { colors } from '../../constants/colors';
import { CustomButton } from '../../components/button/CustomButton';
import { LabelText } from '../../components/common/LabelText';
import { showToast } from '../../utils/notifier';

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuthStore();

  function signUp() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || password.length < 6 || !name.trim()) {
      showToast('Email, name and valid password is required');
      return;
    }

    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email');
      return;
    }

    setToken('12345'); // to work on later
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, gap: 20 }}>
        <LabelText
          text="Sign up"
          style={{ fontSize: 25, lineHeight: undefined, textAlign: 'center' }}
        />
        <CustomInput
          onChangeText={setName}
          label="Name"
          placeholder="Eg Aekimena"
        />
        <CustomInput
          onChangeText={setEmail}
          label="Email"
          placeholder="Eg user@gmail.com"
        />
        <CustomInput label="Password" onChangeText={setPassword} secured />
        <CustomButton title="Sign up" onPress={signUp} />
      </View>
      <View
        style={{ position: 'absolute', bottom: 0, width: '100%', padding: 20 }}
      >
        <Text
          style={{ textAlign: 'center' }}
          onPress={() => navigation.navigate('login')}
        >
          Already have an account? Login
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
});
