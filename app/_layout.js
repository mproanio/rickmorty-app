import { Stack } from 'expo-router'

export default function Layout() {
  return <Stack
    screenOptions={{

    }}
  >
    <Stack.Screen
      name='index'
      options={{
       // title: 'Home',
        headerShown:false,
        headerShadowVisible:false
      }}
    />

    <Stack.Screen
      name='about'
      options={{
        title: 'Acerca de'
      }}
    />
  </Stack>
}