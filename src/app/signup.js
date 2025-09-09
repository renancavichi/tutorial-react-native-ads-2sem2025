import { View, Text, StyleSheet, TextInput, Platform} from "react-native";
import { useState } from "react";
import Button from "../components/ui/Button";

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSignup = () => {
        console.log(name, email, pass);
        //fetch api
        console.log(Platform.OS)

    }

    return (
        <View style={styles.container}>
            <Text>SignUp</Text>

            <Text>Nome:</Text>
            <TextInput
                style={[styles.input, {height: 70}]}
                value={name}
                onChangeText={setName}
                multiline={true}
            />
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="nome@email.com"
                placeholderTextColor={'#999'}
                value={email}
                onChangeText={setEmail}
            />
             <Text>Pass:</Text>
            <TextInput
                style={styles.input}
                //placeholder="Digite seu nome"
                value={pass}
                onChangeText={setPass}
                secureTextEntry={true}
            />

            <Button title="Cadastrar" onPress={handleSignup} style={{marginTop: 20}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        borderWidth: 1,
        width: '80%',
        borderColor: '#212121ff',
        padding: 10,
        fontSize: 18,
        borderRadius: 7
    }
})