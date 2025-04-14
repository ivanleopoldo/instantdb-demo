import Item from '@/components/item';
import LastItem from '@/components/last-item';
import { NoteData } from '@/lib/types';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import db from '@/lib/db';
import { router } from 'expo-router';

export default function Home() {
  const { data, isLoading } = db.useQuery({ notes: {} });

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="relative min-h-screen w-screen">
      <FlatList
        numColumns={1}
        contentContainerClassName="bg-neutral-200 overflow-hidden border-neutral-300 border rounded-lg m-4"
        data={data?.notes ?? []}
        keyExtractor={(item: NoteData) => item.id}
        renderItem={({ item }: { item: NoteData }) => {
          return <Item data={item} />;
        }}
        ListFooterComponent={() => <LastItem />}
        ItemSeparatorComponent={() => {
          return <View className="border-b border-neutral-300" />;
        }}
      />
    </SafeAreaView>
  );
}
