import { Stack, router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function CreateNote() {
  const handleSave = () => {};

  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: 'Create Note',
          headerLeft: () => <Button title="Back" onPress={() => router.dismissTo('/')} />,
          headerRight: () => <Button title="Save" onPress={handleSave} />,
        }}
      />
      <Text>CreateNote</Text>
    </View>
  );
}
