import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    position?: 'bl' | 'br'; 
}

export const Fab = ({ title, onPress, position = 'bl' }: Props) => {

    return (
        <TouchableOpacity style={[
            styles.fab,
            (position === 'bl')
                ? styles.fabLocationBL
                : styles.fabLocationBR
        ]}
            onPress={onPress}>
            <Text style={styles.fabText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#090a25',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center'
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 20,
        left: 15
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 20,
        right: 15
    }
})