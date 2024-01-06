import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, TextSb } from '../../../../components/Themed';
import Divider from '../../../../components/Divider';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const data = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
];

export default function Medias() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          paddingHorizontal: 15,
          paddingBottom: 15,
        }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name='arrow-back' size={30} />
        </Pressable>

        <TextSb
          style={{
            fontSize: 25,
          }}>
          Medias
        </TextSb>
      </View>
      <Divider />
      <FlatList
        style={{ padding: 10 }}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        data={data}
        numColumns={3}
        renderItem={() => (
          <View
            style={{
              backgroundColor: 'gray',
              borderRadius: 20,
              flex: 1,
              aspectRatio: 1,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
