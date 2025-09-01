import { View, Text, StyleSheet } from "react-native";
import Button from "../components/ui/Button";
import { useRouter } from "expo-router";

export default function Initializer() {

    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Initializer</Text>
            <Button title="Login" onPress={() => router.replace('/login')} />
            <Button title="SignUp" onPress={() => router.replace('/signup')} />
            <Button title="Home" onPress={() => router.replace('/home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})