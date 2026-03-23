import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
<Stack>
  <Stack.Screen name="(tabs)" options={{ headerShown: false, contentStyle: { backgroundColor: '#0D0D0D' } }} />
  <Stack.Screen name="tabs" options={{ headerShown: false }} />
</Stack>  );
}