import { Text, View, StyleSheet } from "react-native"
import StackRow from "./ui/StackRow"
import Stack from "./ui/Stack"
import H1 from "./ui/H1"


function Card({title, desc}) {
  return (
    <StackRow style={styles.card}>
        <View style={styles.image}></View>
        <Stack style={{gap: 10}}>
            <H1>{title}</H1>
            <Text>{desc}</Text>
        </Stack>
    </StackRow>
  )
}


const styles = StyleSheet.create({
  image: {
    backgroundColor: '#000000ff',
    width: 100,
    height: 100
  },
  card: {
    gap: 10,
    padding: 10,
    height: 140,
    backgroundColor: "#ef9236ff",
  }
});


export default Card