import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'geist': require('../assets/fonts/Geist-Regular.otf'),
    'geist-sb': require('../assets/fonts/Geist-SemiBold.otf'),
    'geist-b': require('../assets/fonts/Geist-Bold.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        <Stack.Screen
          name='chats/[slug]/index'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='chats/[slug]/info/index'
          options={{ presentation: 'modal', headerShown: false }}
        />
        <Stack.Screen
          name='chats/[slug]/info/Medias'
          options={{ presentation: 'modal', headerShown: false }}
        />
        <Stack.Screen
          name='new'
          options={{ presentation: 'containedModal', headerTitle: 'New Chat' }}
        />
      </Stack>
    </ThemeProvider>
  );
}
