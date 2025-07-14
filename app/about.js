import { Link } from 'expo-router'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Logo } from '../components/Logo'

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      <Text style={styles.title}>Sobre Rick and Morty</Text>
      <Text style={styles.text}>
        Rick and Morty es una comedia animada que sigue las aventuras de un científico muy inteligente pero irresponsable
        y su nieto, mientras viajan por distintos mundos y dimensiones.
      </Text>

      <Text style={styles.text}>
        La serie mezcla humor, ciencia ficción y temas profundos de forma creativa y a veces absurda. Cada episodio presenta situaciones únicas que desafían la lógica y la realidad.
      </Text>

      <Text style={styles.text}>
        Personajes como Summer, Beth y Jerry también forman parte de la historia y muestran distintos aspectos de la familia y la sociedad.
      </Text>

      <Text style={styles.text}>Se puede ver en Adult Swim y en plataformas de streaming.</Text>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>← Volver al inicio</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex:1
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#007aff',
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})
