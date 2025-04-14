import { router } from 'expo-router';
import { Button, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
      <Button title="Open modal" onPress={() => router.push('/create')} />
    </SafeAreaView>
  );
}
