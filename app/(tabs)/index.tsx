import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { chats } from '../../data';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TextSb } from '../../components/Themed';

export default function MessagesScreen() {
  const toChat = (id: string) => {
    router.push(`/chats/${id}`);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item: chat }) => (
          <Pressable
            style={{ ...styles.messageContainer }}
            onPress={() => toChat(chat.id)}>
            <View style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <TextSb style={{ fontSize: 19 }}>{chat.receiver}</TextSb>
              <Text style={{ fontSize: 15 }}>{chat.body}</Text>
            </View>
            <View>
              <Text>18:31</Text>
            </View>
          </Pressable>
        )}
        style={{
          gap: 10,
          height: '100%',
          backgroundColor: 'white',
        }}
      />
      <NewChat />
    </View>
  );
}

const NewChat = () => {
  return (
    <Pressable style={styles.newChatButton}>
      {({ pressed }) => (
        <MaterialCommunityIcons name='chat-plus' size={25} color={'white'} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  newChatButton: {
    position: 'fixed',
    bottom: 120,
    // right: 0,
    left: '80%',
    zIndex: 30,
    backgroundColor: 'black',
    width: 65,
    height: 65,
    borderRadius: 10000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flexDirection: 'row',
    gap: 13,
    paddingHorizontal: 2,
    paddingVertical: 7,
  },
  avatar: {
    borderRadius: 10000,
    backgroundColor: 'black',
    width: 60,
    height: 60,
  },
  container: {
    padding: 10,
  },
});
