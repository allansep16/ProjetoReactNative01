import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>

      <Text style={{
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        fontSize: 20,
        color: 'blue',
      }}> Aula de React-native, com Professor Obama! </Text>

    </View>
  );
}