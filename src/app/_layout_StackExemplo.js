import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
            headerShown: false,
            // title: 'Pokedex',
            // headerStyle: {
            //     backgroundColor: '#92dbffff',
            // },
      }}/>
      <Stack.Screen name="profile" options={{
            headerShown: false,
            // title: 'Perfil',
            // headerStyle: {
            //     backgroundColor: '#ffce92ff',
            // },
      }}/>
      <Stack.Screen name="contatos" options={{
            headerShown: false,
            // title: 'Perfil',
            // headerStyle: {
            //     backgroundColor: '#ffce92ff',
            // },
      }}/>
    </Stack>
  );
}