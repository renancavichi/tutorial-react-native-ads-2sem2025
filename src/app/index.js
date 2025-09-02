import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Initializer() {
    const router = useRouter()

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedStatus = await AsyncStorage.getItem('isLogged')
            if (loggedStatus) {
                router.replace('/home')
            }   else {
                router.replace('/login')
            }
        }   
        setTimeout(() => {
            checkLoginStatus()
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <Text>Initializer</Text>
            <ActivityIndicator size="large" color="#0000ff" />
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