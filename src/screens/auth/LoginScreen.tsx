import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CustomInput } from '../../components/inputs/CustomInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuthStore } from '../../store/authStore';
import { CustomButton } from '../../components/button/CustomButton';
import ScreenContainer from '../../components/layouts/ScreenContainer';
import { LabelText } from '../../components/common/LabelText';
import { showToast } from '../../utils/notifier';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuthStore();

  function login() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || password.length < 6) {
      showToast('Email and valid password is required');
      return;
    }

    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email');
      return;
    }

    setToken('12345'); // to work on later
  }
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 20, gap: 20 }}>
          <LabelText
            text="Login"
            style={{ fontSize: 25, lineHeight: undefined, textAlign: 'center' }}
          />
          <CustomInput
            onChangeText={setEmail}
            label="Email"
            placeholder="Eg user@gmail.com"
          />
          <CustomInput
            label="Password"
            onChangeText={setPassword}
            secured
            placeholder="password"
          />
          <CustomButton title="Login" onPress={login} />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: 20,
          }}
        >
          <Text
            style={{ textAlign: 'center' }}
            onPress={() => navigation.navigate('signUp')}
          >
            Don't have an account? Sign up
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
