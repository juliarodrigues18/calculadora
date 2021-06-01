import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

export default function App() {
  const [primeiro, setPrimeiro] =  useState(0);
  const [segundo, setSegundo] =  useState(0);
  

  const x = parseFloat(primeiro);
  const y = parseFloat(segundo);

  const soma = x + y;
  const subtracao = parseInt( x - y );
  const divisao = Number(x / y).toFixed(2);
  const multiplicacao = x * y;

  return (
    <KeyboardAvoidingView style={styles.container}
    behavior='padding'>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput 
       keyboardType="decimal-pad"
      style={styles.input}
      value={primeiro} 
      onChangeText={setPrimeiro}
       />
      <TextInput 
      keyboardType="decimal-pad"
      style={styles.input}
      value={segundo} 
      onChangeText={setSegundo} />

      <Text style={styles.subtitle}> Resultado</Text>
 
      <Text style={styles.result}>{`Soma: ${soma}`} </Text>
      <Text style={styles.result}>{`Subtração: ${subtracao}`} </Text>
      <Text style={styles.result}>{`Divisão: ${divisao}`} </Text>
      <Text style={styles.result}>{`Multiplicação: ${multiplicacao}`} </Text>
   

      <StatusBar style="auto" />
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:36,
    fontWeight:'100',
  },
  input:{
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 30,
    height: 50,
    fontSize: 30,
    fontWeight: '100',
    backgroundColor: '#EBE867',
    marginTop: 20,
    borderRadius:20,
},
subtitle:{
  marginTop: 20,
  marginBottom: 20,
  fontWeight: 'bold',
  fontSize: 20,

},
result:{
  
  textAlign: 'center',
  alignSelf: 'stretch',
  marginHorizontal:30,
  height: 40,
  fontSize: 20,
  fontWeight: '100',
  backgroundColor: '#E4E6CF',
  marginTop: 20,
  padding: 5,
  borderRadius:20,
}
});
