import '@/global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView>
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
        <Stack.Screen
          name="[id]"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
