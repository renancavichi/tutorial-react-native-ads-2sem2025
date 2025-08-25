import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
            headerShown: false,
            title: 'Pokedex',
            tabBarIcon: ({color}) => <FontAwesome5 name="home" size={24} color={color} />
      }}/>
      <Tabs.Screen name="profile" options={{
            headerShown: false,
            title: 'Perfil',
            tabBarIcon: ({color}) => <FontAwesome name="user-circle-o" size={24} color={color} />
      }}/>
      <Tabs.Screen name="contatos" options={{
            headerShown: false,
            title: 'Contatos',
            tabBarIcon: ({color}) => <AntDesign name="contacts" size={24} color={color} />
      }}/>
      <Tabs.Screen name="_layout_StackExemplo" options={{
            headerShown: false,
            href: null,
      }}/>
    </Tabs>
  );
}