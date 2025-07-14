import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getEpisodioDetail } from '../rickyMorty'
import  EpisodeDetails  from '../components/EpisodeDetails'

const EpisodioScreen = () => {
  const { id } = useLocalSearchParams()
  const [episodio, setEpisodio] = useState(null)

  useEffect(() => {
    if (!id) return;

    getEpisodioDetail(id).then(data => {
      setEpisodio(data);
    });
  }, [id]);

  if (episodio == null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <EpisodeDetails episodio={episodio} />
  )
}

export default EpisodioScreen

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  }
})
