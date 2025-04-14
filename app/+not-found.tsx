import { Stack, router } from 'expo-router';
import { Button, SafeAreaView, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="min-h-screen items-center justify-center">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="items-center">
        <Text className="text-5xl font-bold">404</Text>
        <Text className="font-light">PAGE NOT FOUND</Text>
        <Button title="Go back Home" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
}
