import { StyleSheet, Text, View, Pressable } from 'react-native'
import StackRow from '../components/ui/StackRow'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import Button from './ui/Button'


export default function Header() {

  const router = useRouter();

  return (
    <StackRow style={styles.header}>
      <Pressable onPress={() => {router.push('/profile')}}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/renancavichi.png' }}
        />
      </Pressable>
      <Button title="Contatos" onPress={() => {router.push('/contatos')}} />
    </StackRow>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#da931aff',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  avatar: {
    backgroundColor: '#31ee31ff',
    width: 60,
    height: 60,
    borderRadius: 40
  },
  nav: {
    backgroundColor: '#000000ff',
    width: 50,
    height: 50,
  }
});