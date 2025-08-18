import { StyleSheet, View } from 'react-native';

export default function StackRow({children, style, ...rest}) {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    alignItems: "center",
  }
});