import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fab } from '../components/Fab';

export const Screen3 = () => {
  const [contador, setContador] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>
      <TouchableOpacity style={[
        styles.fab,
        styles.fabLocationBL
      ]}
        onPress={() => setContador(contador + 5)}>
        <Text style={styles.fabText}>+5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[
        styles.fab,
        styles.fabLocationBR
      ]}
        onPress={() => setContador(contador - 5)}>
        <Text style={styles.fabText}>-5</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    top: -60
  },
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
