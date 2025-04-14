import '@/global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitle: 'Notes',
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
