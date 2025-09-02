import { Stack } from 'expo-router'

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
            headerShown: false,
      }}/>
      <Stack.Screen name="login" options={{
            //headerShown: false,
             title: 'Login',
      }}/>
      <Stack.Screen name="signup" options={{
           // headerShown: false,
           presentation: 'modal',
            title: 'Cadastrar',
      }}/>
      <Stack.Screen name="(tabs)" options={{
            headerShown: false
      }}/>
    </Stack>
  )
}