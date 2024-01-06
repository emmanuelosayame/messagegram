import { Pressable, StyleSheet, Switch, View } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Text, TextSb } from '../../../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';

export default function Info() {
  const { slug } = useLocalSearchParams();

  return (
    <LinearGradient colors={['#FFF', '#F4F4F4']} style={styles.container}>
      {/* <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        // style={styles.background}
      /> */}
      <View style={styles.mainImage} />
      <View style={{ gap: 10 }}>
        <View style={styles.menu1}>
          <Pressable onPress={() => router.back()}>
            <AntDesign name='arrowleft' size={30} />
          </Pressable>
          <View style={{ alignItems: 'center' }}>
            <TextSb style={{ fontSize: 22 }}>Lamar</TextSb>
            <Text style={{ fontSize: 13 }}>lamarthegreat@gmail.com</Text>
          </View>
          <Pressable>
            <Ionicons name='ellipsis-vertical' size={24} />
          </Pressable>
        </View>
        <View
          style={{
            ...styles.paper,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Ionicons name='videocam' size={30} />
          <Ionicons name='call' size={30} />
        </View>
        <View
          style={{
            ...styles.paper,
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
          }}>
          <Ionicons name='information-circle-sharp' size={30} />
          <Text style={{ fontSize: 16 }}>Just like that 😏</Text>
        </View>

        <View style={{ ...styles.paper }}>
          <View style={{ gap: 15 }}>
            <View style={styles.flexBTW}>
              <Text style={{ fontSize: 15, color: '#797C7B' }}>
                Media Shared
              </Text>
              <Pressable
                onPress={() => router.push(`/chats/${slug}/info/Medias`)}>
                <Text style={{ color: '#2F80ED', fontSize: 15 }}>View All</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <View style={styles.imagePH} />
              <View style={styles.imagePH} />
              <View style={styles.imagePH} />
            </View>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Ionicons name='notifications-outline' size={25} />
              <Text style={{ fontSize: 17, flex: 1 }}>Notifications</Text>
              <Switch disabled />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  imagePH: {
    backgroundColor: 'gray',
    borderRadius: 10,
    flex: 1,
    aspectRatio: 1,
  },
  flexBTW: { flexDirection: 'row', justifyContent: 'space-between' },
  paper: { backgroundColor: 'white', padding: 20, borderRadius: 15 },
  menu1: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    // alignItems: 'center',
    width: '100%',
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 10000,
    backgroundColor: 'gray',
    alignSelf: 'center',
  },
});
