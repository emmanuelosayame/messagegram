import { StyleSheet, View } from 'react-native';

export default function Divider() {
  return <View style={styles.view} />;
}

const styles = StyleSheet.create({
  view: { borderBottomWidth: 0.4, borderBottomColor: '#00000033' },
});
