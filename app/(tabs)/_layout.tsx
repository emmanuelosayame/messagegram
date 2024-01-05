import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, Tabs } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          height: 65,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 5,
          gap: 5,
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Message',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIcon: ({ color }) => (
            <AntDesign name='message1' color={color} size={25} s />
          ),
          header: () => <MessageHeader />,
        }}
      />
      <Tabs.Screen
        name='contacts'
        options={{
          title: 'Contacts',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIcon: ({ color }) => (
            <AntDesign name='user' color={color} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name='setting'
        options={{
          title: 'Setting',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIcon: ({ color }) => (
            <AntDesign name='setting' color={color} size={25} />
          ),
        }}
      />
    </Tabs>
  );
}

const MessageHeader = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.headerContainer}>
      <Text style={{ fontSize: 23, fontWeight: '600' }}>Chats</Text>
      <Link href='/modal' asChild>
        <Pressable>
          {({ pressed }) => (
            <AntDesign
              name='search1'
              size={30}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderBottomWidth: 0.7,
    borderBottomColor: 'gray',
  },
});
