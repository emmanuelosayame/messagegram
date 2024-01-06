import { Pressable, StyleSheet, View, useColorScheme } from 'react-native';
import { TextSb } from './Themed';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';

export function MessageHeader() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.headerContainer}>
      <TextSb style={{ fontSize: 25 }}>Chats</TextSb>
      <Link href='/modal' asChild>
        <Pressable>
          {({ pressed }) => (
            <Ionicons
              name='search'
              size={30}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderBottomWidth: 0.4,
    borderBottomColor: '#00000033',
  },
});
