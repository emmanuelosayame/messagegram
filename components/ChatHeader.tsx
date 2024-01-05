import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Chat } from '../data';
import { AntDesign } from '@expo/vector-icons';
import { Text, TextSb } from './Themed';
import { router } from 'expo-router';

type Props = {
  chat: Chat;
};

export default function ChatHeader({ chat }: Props) {
  const showInfo = () => router.push(`/chats/${chat.id}/Info`);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <AntDesign size={25} name='arrowleft' />
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
      <AntDesign name='phone' size={25} />
      <AntDesign
        name='videocamera'
        size={25}
        style={{ marginRight: 17, marginLeft: 4 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 10000,
    backgroundColor: 'gray',
    width: 60,
    height: 60,
  },
  container: {
    position: 'fixed',
    backgroundColor: '',
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderWidth: 0.3,
    borderBottomColor: 'gray',
  },
});
