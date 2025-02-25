import { TextInput, TouchableOpacity, View, Text } from "react-native";

type props = {
  nome: string,
  setRemover: (nome: string) => void
}

export function Participante({ nome, setRemover }: props) {

  return (
    <View style={styles.container}>
      <Text style={styles.textNome}>{nome}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setRemover(nome)}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )

}

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  textNome: {
    flex: 1, //Utiliza tudo que for retante sem utilização
    fontSize: 16,
    padding: 12,
    color: '#fff',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
  }
});