import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Product {
  name: string;
  precio: number;
}

const products: Product[] = [
  { name: 'mouse', precio: 50 },
  { name: 'laptop', precio: 1500 },
  { name: 'teclado', precio: 80 },
  { name: 'monitor', precio: 120 }
];

export const Screen2 = () => {
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].precio;
    }
    return total;
  };

  const renderProductItem = ({ item }: { item: Product }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>Precio: {item.precio}</Text>
      </View>
    );
  };

  const keyExtractor = (item: Product) => item.name;

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={keyExtractor}
      />
      <Text>Total: {calculateTotal()}</Text>
    </View>
  );
};

