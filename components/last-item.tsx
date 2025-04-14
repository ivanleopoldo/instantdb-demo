import { router } from 'expo-router';
import { View, Text } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

export default function LastItem() {
  return (
    <View className="items-center p-4">
      <Pressable onPress={() => router.push('/create')}>
        <Text className="text-neutral-500">ADD ITEM</Text>
      </Pressable>
    </View>
  );
}
