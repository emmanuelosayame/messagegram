import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Chat } from '../data';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Text, TextSb } from './Themed';
import { router } from 'expo-router';

type Props = {
  chat: Chat;
};

export default function ChatHeader({ chat }: Props) {
  const showInfo = () => router.push(`/chats/${chat.id}/info`);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Ionicons size={30} name='arrow-back' />
      </Pressable>
      <TouchableOpacity
        onPress={showInfo}
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          gap: 10,
        }}>
        <View style={styles.avatar} />

        <View style={{}}>
          <TextSb style={{ fontSize: 19 }}>{chat.receiver}</TextSb>
          <Text style={{ fontSize: 13, color: '#797C7B' }}>Active Now</Text>
        </View>
      </TouchableOpacity>
      <Ionicons name='call' size={25} />
      <Ionicons
        name='videocam'
        size={25}
        style={{ marginRight: 5, marginLeft: 4 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 10000,
    backgroundColor: 'gray',
    width: 55,
    height: 55,
  },
  container: {
    position: 'fixed',
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 18,
    paddingBottom: 10,
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
    borderWidth: 0.3,
    borderBottomColor: 'gray',
  },
});
