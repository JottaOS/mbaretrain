import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat: require('../assets/fonts/montserrat_variable.ttf'),
    Inter: require('../assets/fonts/inter_variable.ttf'),
    ...FontAwesome.font
  });

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
  const theme = useColorScheme();
  const colorScheme = theme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={colorScheme}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)/login' options={{ headerShown: false }} />
        <Stack.Screen name='(onboarding)/step-1' options={{ headerShown: false }} />
        <Stack.Screen name='(onboarding)/step-2' options={{ headerShown: false }} />
        <Stack.Screen name='(onboarding)/step-3' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
