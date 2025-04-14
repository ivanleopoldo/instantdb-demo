import { NoteData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { View, Text, Pressable } from 'react-native';

export default function Item({ className, data }: { className?: string; data: NoteData }) {
  return (
    <View className={cn('overflow-hidden border-b border-neutral-300 p-4', className)}>
      <Pressable onPress={() => alert('hello')}>
        <Text className="text-xl font-bold">{data.title ?? 'No Title'}</Text>
        <Text className="text-sm">{data.description ?? 'No Description'}</Text>
      </Pressable>
    </View>
  );
}
