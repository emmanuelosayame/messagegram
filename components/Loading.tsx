import { ActivityIndicator, View } from 'react-native';

export const Loading = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color='black' />
    </View>
  );
};

export const LoadingBlur = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 50,
      }}>
      <ActivityIndicator size='large' color='black' />
    </View>
  );
};
