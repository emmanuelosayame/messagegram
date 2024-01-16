import { Pressable, StyleSheet, View } from 'react-native';
import { Text, TextSb } from '../components/Themed';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Auth() {
  return (
    <LinearGradient
      colors={['white', 'gray', 'white', 'white']}
      style={styles.container}>
      <TextSb style={styles.mainText}>Connect easily and quickly</TextSb>
      <Text style={styles.subText}>
        The perfect way to stay connected to friends and family
      </Text>

      <Pressable style={styles.googleButton}>
        <Ionicons name='logo-google' size={35} color={'white'} />
      </Pressable>

      <View style={{}}>
        <Text style={{ fontSize: 17, textAlign: 'center' }}>Or</Text>
      </View>

      <Link href={'/signup'} style={styles.button}>
        Sign up with email
      </Link>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginTop: 20,
        }}>
        <Text>Existing account?</Text>
        <Link href={'/login'} style={{ fontSize: 16 }}>
          Log in
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingBottom: 100,
    justifyContent: 'flex-end',
    flex: 1,
    gap: 20,
  },
  mainText: { fontSize: 60 },
  subText: { fontSize: 20, color: 'gray' },
  button: {
    backgroundColor: 'black',
    borderRadius: 18,
    justifyContent: 'center',
    padding: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'geist',
  },
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
});
