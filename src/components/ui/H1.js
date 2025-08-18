import { StyleSheet, Text } from 'react-native';

export default function H1({children, style, ...rest}) {
  return (
    <Text style={[styles.h1, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});