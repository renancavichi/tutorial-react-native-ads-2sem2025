import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function Button({style, title, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#399bfdff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  }
});