import { StyleSheet, View } from 'react-native';
import { Text, TextSb } from '../../components/Themed';
import { ReactNode } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  return (
    <View style={styles.container}>
      <View>
        <TextSb
          style={{
            fontSize: 25,
          }}>
          Settings
        </TextSb>
      </View>
      <View style={{ flexDirection: 'row', gap: 10, marginVertical: 30 }}>
        <View style={styles.avatar} />
        <View style={styles.userDetails}>
          <TextSb style={{ fontSize: 19 }}>Emmanuel Lamar</TextSb>
          <Text style={{ fontSize: 15, marginTop: 2, color: '#4F5E7B' }}>
            Trust your feelings , be a good human beings
          </Text>
        </View>
      </View>

      <View>
        <LinkCard text='Account'>
          <Ionicons name='person-circle' size={30} />
        </LinkCard>
        <LinkCard text='Account'>
          <Ionicons name='person-circle-outline' size={30} />
        </LinkCard>
        <LinkCard text='Account'>
          <Ionicons name='person-circle-outline' size={30} />
        </LinkCard>
        <LinkCard text='Account'>
          <Ionicons name='person-circle-outline' size={30} />
        </LinkCard>
        <LinkCard text='Account'>
          <Ionicons name='person-circle-outline' size={30} />
        </LinkCard>
      </View>
    </View>
  );
}

const LinkCard = ({
  children,
  text,
}: {
  text: string;
  children: ReactNode;
}) => {
  return (
    <View style={styles.linkCard}>
      {children}
      <Text style={{ flex: 1, fontSize: 18, color: '#4F5E7B' }}>{text}</Text>
      <Ionicons name='chevron-forward' size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  linkCard: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: 'gray',
    borderRadius: 10000,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  userDetails: {
    width: '65%',
  },
});
