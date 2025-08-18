import { StyleSheet, View } from 'react-native';

export default function Stack({children, style, ...rest}) {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: 'column',
    justifyContent: "center",
  }
});