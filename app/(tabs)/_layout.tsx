import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, Redirect, Tabs } from 'expo-router';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Text, TextSb } from '../../components/Themed';
import { MessageHeader } from '../../components/MessagesHeader';
import { useStore } from '../../store';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { user, loading } = useStore((state) => state.auth);

  if (loading) return <ActivityIndicator />;

  if (!user) {
    return <Redirect href={'/auth'} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 7,
          gap: 12,
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Messages',
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'geist-sb',
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name='chatbubbles' color={color} size={30} />
          ),
          header: () => <MessageHeader />,
        }}
      />
      <Tabs.Screen
        name='contacts'
        options={{
          title: 'Contacts',
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 16, fontFamily: 'geist-sb' },
          tabBarIcon: ({ color }) => (
            <Ionicons name='person' color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name='setting'
        options={{
          title: 'Setting',
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 16, fontFamily: 'geist-sb' },
          tabBarIcon: ({ color }) => (
            <AntDesign name='setting' color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
