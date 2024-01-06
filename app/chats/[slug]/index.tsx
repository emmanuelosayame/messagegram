import { useLocalSearchParams } from 'expo-router';
import { FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';
import ChatHeader from '../../../components/ChatHeader';
import { chats } from '../../../data';
import { Text } from '../../../components/Themed';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const ChatScreen = () => {
  const { slug } = useLocalSearchParams();

  const messages = [
    { id: '1', type: 'receiver', body: 'Have a great working week!!' },
    { id: '2', type: 'receiver', body: 'Hope you like it' },
    { id: '3', type: 'sender', body: 'Have a great working week!!' },
    { id: '4', type: 'receiver', body: 'Hope you like it' },
    { id: '5', type: 'sender', body: 'Have a great working week!!' },
    { id: '6', type: 'receiver', body: 'Hope you like it' },
    { id: '7', type: 'sender', body: 'Have a great working week!!' },
    { id: '8', type: 'receiver', body: 'Hope you like it' },
    { id: '9', type: 'sender', body: 'Have a great working week!!' },
  ];

  const chat = chats?.find((chat) => chat.id === slug);

  if (!chat) return <View></View>;

  return (
    <LinearGradient colors={['#FFF', '#F4F4F4']} style={{ height: '100%' }}>
      <ChatHeader chat={chat} />
      <FlatList
        contentContainerStyle={styles.container}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item: message }) => (
          <ChatBubble body={message.body} type={message.type as any} />
        )}
      />
      <BottomBar />
    </LinearGradient>
  );
};

type CBProps = {
  body: string;
  type: 'sender' | 'receiver';
};

const ChatBubble = ({ body, type }: CBProps) => {
  return (
    <Pressable>
      {({ pressed }) => (
        <View
          style={{
            ...styles.chatBubble,
            backgroundColor: type === 'receiver' ? '#EDEDED' : '#2F80ED',
            alignSelf: type === 'receiver' ? 'flex-start' : 'flex-end',
            opacity: pressed ? 0.5 : 1,
          }}>
          <Text
            style={{
              color: type === 'receiver' ? 'black' : 'white',
              fontSize: 17,
            }}>
            {body}
          </Text>
          <Text
            style={{
              textAlign: 'right',
              color: type === 'receiver' ? 'black' : 'white',
            }}>
            19:04
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const BottomBar = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.bottomBar}>
      <MaterialIcons name='emoji-emotions' size={28} />
      <TextInput
        style={styles.textInput}
        multiline
        placeholder='Write a message'
        maxLength={400}
        onChangeText={setMessage}
      />
      {message.length > 0 ? (
        <Pressable style={styles.sendButton}>
          {({}) => <MaterialIcons name='send' size={28} color={'white'} />}
        </Pressable>
      ) : (
        <Pressable style={styles.sendButton}>
          {({}) => (
            <MaterialCommunityIcons
              name='microphone'
              size={30}
              color={'white'}
            />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  sendButton: {
    backgroundColor: '#2F80ED',
    borderRadius: 10000,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // backgroundColor: 'gray',
    flex: 1,
    fontSize: 17,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
    maxHeight: 120,
  },
  bottomBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 13,
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chatBubble: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    maxWidth: 300,
    gap: 5,
  },
  avatar: {
    borderRadius: 10000,
    backgroundColor: 'gray',
    width: 60,
    height: 60,
  },
  container: {
    // flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 20,
  },
});
