import { StyleSheet, Text, View } from 'react-native'
import StackRow from '../components/ui/StackRow'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons'


export default function Header() {
  return (
    <StackRow style={styles.header}>
      <Image 
        style={styles.avatar}
        source={{uri: 'https://github.com/renancavichi.png'}}
      />
      <View style={styles.nav}>
        <Ionicons name="menu" size={24} color="white" />
      </View>
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