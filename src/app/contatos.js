import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';

export default function Contatos() {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content} >
        <Text>Contatos Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32be94ff',
    gap: 20,
  },
  content: {
    flex: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
