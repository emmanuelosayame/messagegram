import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TextSb } from '../../../components/Themed';

export default function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.mainImage} />
      <View style={styles.menu1}>
        <Pressable onPress={() => router.back()}>
          <AntDesign name='arrowleft' size={30} />
        </Pressable>
        <View style={{ alignItems: 'center' }}>
          <TextSb style={{ fontSize: 22 }}>Lamar</TextSb>
          <Text style={{ fontSize: 13 }}>lamarthegoat@gmail.com</Text>
        </View>
        <Pressable>
          <Ionicons name='ellipsis-vertical' size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  mainImage: {
    width: 250,
    height: 250,
    borderRadius: 10000,
    backgroundColor: 'gray',
  },
});
