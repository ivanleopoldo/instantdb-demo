import db from '@/lib/db';
import { NoteData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Item({ className, data }: { className?: string; data: NoteData }) {
  const handleEdit = (id: string) => {
    router.push({
      pathname: '/[id]',
      params: {
        id: id,
      },
    });
  };

  const handleDelete = (id: string) => {
    db.transact(db.tx.notes[id].delete());
  };

  return (
    <View className={cn('overflow-hidden p-4', className)}>
      <Pressable onPress={() => handleEdit(data.id)} onLongPress={() => handleDelete(data.id)}>
        <Text className="text-xl font-bold">{data.title ?? 'No Title'}</Text>
        <Text className="text-sm">{data.description ?? 'No Description'}</Text>
      </Pressable>
    </View>
  );
}
