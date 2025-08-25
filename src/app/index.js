import { StyleSheet, View, FlatList } from 'react-native';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Home() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
      const data = await response.json();
      console.log(data.results);
      setPokemons(data.results)
    }
    getPokemons();
  }, [])


  return (
    <View style={styles.container}>
      <FlatList
        style={{gap: 20}}
        data={pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card title={item.name} desc={item.url} />}
        ListHeaderComponent={Header}
      />
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
    backgroundColor: '#3153eeff',
    paddingHorizontal: 10,
    paddingVertical: 30,
    gap: 30
  }
});
