import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const EpisodeDetails = ({ episodio }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{episodio.name.toUpperCase()}</Text>
      <Text style={styles.text}>Fecha: {episodio.air_date}</Text>
      <Text style={styles.text}>Número de episodio: {episodio.episode}</Text>
    </View>
  )
}

export default EpisodeDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
})