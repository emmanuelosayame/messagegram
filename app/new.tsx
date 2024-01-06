import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

export default function New() {
  return (
    <View style={{ padding: 10 }}>
      <TextInput style={styles.search} placeholder='Search email or name' />
      {/* <Text>New</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    borderRadius: 7,
    fontFamily: 'geist',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
