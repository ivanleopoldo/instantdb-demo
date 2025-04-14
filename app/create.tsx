import { Stack, router } from 'expo-router';
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

export default function CreateNote() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSave = () => {
    alert(`Title: ${title}, Description: ${description}`);
    if (router.canDismiss()) {
      router.dismiss();
    }
  };

  return (
    <View className="gap-6 p-4">
      <Stack.Screen
        options={{
          headerTitle: 'Create Note',
          headerLeft: () => <Button title="Back" onPress={() => router.dismissTo('/')} />,
          headerRight: () => <Button title="Save" onPress={handleSave} />,
        }}
      />
      <View className="gap-2">
        <View className="gap-2">
          <Text className="text-sm font-light text-neutral-600">TITLE</Text>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            className="rounded-lg bg-neutral-200 px-4 py-2"
          />
        </View>
        <View className="gap-2">
          <Text className="text-sm font-light text-neutral-600">DESCRIPTION</Text>
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            className="rounded-lg bg-neutral-200 px-4 py-2"
          />
        </View>
      </View>
      <Pressable onPress={handleSave}>
        <View className="items-center rounded-lg bg-green-600 px-4 py-2">
          <Text className="text-white">Submit</Text>
        </View>
      </Pressable>
    </View>
  );
}
