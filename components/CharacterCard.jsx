import { StyleSheet, Text, View, Image } from 'react-native';

export function CharacterCard({ character }) {



  return (
    <View key={character.id} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text><Text style={styles.texto}>Estado:</Text> {character.status}</Text>
      <Text><Text style={styles.texto}>Especie:</Text> {character.species}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  texto: {
    color: 'blue',
    fontWeight: 'bold'
  }
});