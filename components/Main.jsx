import { useEffect, useState } from 'react';
import { CharacterCard } from './CharacterCard';
import { getPersonajes } from '../rickyMorty'
import { ActivityIndicator } from 'react-native';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, SafeAreaView } from 'react-native';


export function Main() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        getPersonajes()
            .then(data => {
                setPersonajes(data);
            })
            .catch(error => {
                console.error('Error al obtener los personajes:', error);
            });
    }, []);



    if (personajes.length === 0) {
        return (<ActivityIndicator size={32}></ActivityIndicator>)
    }

    return (
        <>
            {personajes.map((personaje) => (
                <CharacterCard key={personaje.id} character={personaje} />
            ))}


        </>
    );
}