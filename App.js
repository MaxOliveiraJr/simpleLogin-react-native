import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Desconto UltraBlaster</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"></TextInput>
      <Button title="Verificar" />
      <Text style={styles.status}>...</Text>
      <View style={styles.cupomArea}>
        <Text style={styles.cupomTitle}>Código do Cupom</Text>
        <Text style={styles.cupomCode}>JAHRK123</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 45,
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#555',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  status: {
    margin: 50,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  cupomArea: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
  },
  cupomTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  cupomCode: {
    textAlign: 'center',
    fontSize: 40
  }
});

export default App;
