import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Main } from '../components/Main'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Logo } from '../components/Logo'

export default function Home() {
  const router = useRouter()

  const irContact = () => {
    router.push('about')
  }

  return (
    <>
      <View style={styles.header}>
        <Pressable onPress={irContact} style={styles.button}>
          <Text style={styles.buttonText}>Acerca de</Text>
        </Pressable>
        <Logo />
      </View>

      <Text style={styles.title}>Personajes de Rick and Morty</Text>
      <Main />
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
})
