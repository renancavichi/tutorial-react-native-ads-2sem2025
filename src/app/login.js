import { View, Text, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import { Button } from "react-native-web"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistObject, retrieveObject } from "../utils/persistObject"

export default function Login() {

    const [isLogged, setIsLogged] = useState("false")
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedStatus = await AsyncStorage.getItem('isLogged') 
            if (loggedStatus) {
                setIsLogged(loggedStatus)
                const userData = await retrieveObject('user')
                setUser(userData)
            }
        }
        checkLoginStatus()
    }, [])

    const handleLogin = async () => {
        setIsLogged("true")
        await AsyncStorage.setItem('isLogged', 'true')
        await persistObject('user', { name: 'Carlos', refreshToken: 'lksdjf0q3284slndf' })
        setUser({ name: 'Carlos', refreshToken: 'lksdjf0q3284slndf' })
    }

    const handleLogout = async () => {
        setIsLogged("false")
        await AsyncStorage.removeItem('isLogged')
        await AsyncStorage.removeItem('user')
         setUser(null)
    }


    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Text>Está Logado: {isLogged}</Text>
            <Text>User: {JSON.stringify(user)}</Text>
            <Button title="Logar" onPress={handleLogin} />
            <Button title="Logout" onPress={handleLogout} />
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