import { Ionicons } from '@expo/vector-icons';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Text, TextB, TextSb } from '../components/Themed';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginS, loginS } from '../utils/z';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/fire';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { LoadingBlur } from '../components/Loading';

const Login = () => {
  const [{ loading, error }, setFState] = useState<{
    loading: boolean;
    error: string | undefined;
  }>({ loading: false, error: undefined });

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<LoginS>({
    resolver: zodResolver(loginS),
  });

  const onSubmit = async (values: LoginS) => {
    setFState({ loading: true, error: undefined });
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      setFState({ loading: false, error: undefined });
    } catch (err) {
      const error = err as FirebaseError;
      setFState({ loading: false, error: error.code });
    }
  };

  return (
    <View style={styles.container}>
      {loading && <LoadingBlur />}
      <Pressable onPress={() => router.back()}>
        <Ionicons name='arrow-back' size={30} />
      </Pressable>
      <TextSb
        style={{
          fontSize: 19,
          textAlign: 'center',
          marginTop: 80,
        }}>
        Login to MessageGram
      </TextSb>
      <Text style={{ fontSize: 15, color: 'gray', padding: 20 }}>
        Welcome back! Sign in using your social account or email to continue us
      </Text>
      {/* 
      <Pressable
        style={styles.googleButton}
        onPress={async () => {
          const provider = new GoogleAuthProvider();
          await signInWithRedirect(auth, provider);
        }}>
        <Ionicons name='logo-google' size={35} color={'white'} />
      </Pressable> */}

      <View style={{ gap: 20 }}>
        <Controller
          name='email'
          control={control}
          render={({ field: { value, onChange } }) => (
            <View>
              <TextSb>Email</TextSb>
              <TextInput
                autoComplete='email'
                style={{
                  ...styles.input,
                  borderColor: errors.email?.message ? 'red' : 'gray',
                }}
                value={value}
                onChangeText={onChange}
                placeholder='Email'
              />
            </View>
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field: { value, onChange } }) => (
            <View>
              <TextSb>Password</TextSb>
              <TextInput
                autoComplete='password'
                style={{
                  ...styles.input,
                  borderColor: errors.password?.message ? 'red' : 'gray',
                }}
                value={value}
                onChangeText={onChange}
                placeholder='Password'
              />
            </View>
          )}
        />

        {error && (
          <Text style={{ textAlign: 'center', color: 'red' }}>{error}</Text>
        )}

        <Pressable
          onPress={handleSubmit(onSubmit)}
          style={{ ...styles.button, opacity: !isDirty ? 0.5 : 1 }}>
          <TextB style={{ textAlign: 'center', color: 'white' }}>Login</TextB>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, paddingVertical: 50 },
  googleButton: {
    padding: 4,
    backgroundColor: 'black',
    width: 55,
    height: 55,
    borderRadius: 10000,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: 1,
    width: '100%',
    height: 50,
    fontSize: 19,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'black',
    borderRadius: 18,
    justifyContent: 'center',
    padding: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'geist',
  },
});
