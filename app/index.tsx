import Item from '@/components/item';
import LastItem from '@/components/last-item';
import { NoteData } from '@/lib/types';
import { useRef } from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import Swipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';

export default function Home() {
  const data: NoteData[] = [
    {
      id: '1',
      title: 'Note 1',
      description: 'Description 1',
    },
    {
      id: '2',
      title: 'Note 2',
      description: 'Description 2',
    },
  ];

  const handleEdit = (id: string) => {
    alert(`Edit: ${id}`);
  };
  const handleDelete = (id: string) => {
    alert(`Delete: ${id}`);
  };

  return (
    <SafeAreaView className="relative min-h-screen w-screen">
      <FlatList
        numColumns={1}
        contentContainerClassName="bg-neutral-200 overflow-hidden border-neutral-300 border rounded-lg m-4"
        data={data}
        keyExtractor={(item: NoteData) => item.id}
        renderItem={({ item }: { item: NoteData }) => {
          return (
            <Swipeable
              renderRightActions={() => {
                return (
                  <View className="flex-row ">
                    <Pressable
                      onPress={() => handleEdit(item.id)}
                      className="justify-center bg-blue-600 p-6">
                      <Text className="text-white">Edit</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleDelete(item.id)}
                      className="justify-center bg-red-600 p-4">
                      <Text className="text-white">Delete</Text>
                    </Pressable>
                  </View>
                );
              }}>
              <Item data={item} />
            </Swipeable>
          );
        }}
        ListFooterComponent={() => <LastItem />}
        ItemSeparatorComponent={() => {
          return <View className="border-b border-neutral-300" />;
        }}
      />
    </SafeAreaView>
  );
}
