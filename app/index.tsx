import Item from '@/components/item';
import LastItem from '@/components/last-item';
import { NoteData } from '@/lib/types';
import { router } from 'expo-router';
import { Button, FlatList, SafeAreaView, View } from 'react-native';

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

  return (
    <SafeAreaView className="relative min-h-screen w-screen">
      <View>
        <Button title="Open modal" onPress={() => router.push('/create')} />
        <Button title="Not Found" onPress={() => router.push('/not_found')} />
      </View>
      <FlatList
        numColumns={1}
        contentContainerClassName="bg-neutral-200 border-neutral-300 border rounded-lg m-4"
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Item data={item} />;
        }}
        ListFooterComponent={() => <LastItem />}
      />
    </SafeAreaView>
  );
}
