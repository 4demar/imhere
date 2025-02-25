import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titulo: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 38
  },
  subTitulo: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    flex: 1, //Utiliza tudo que for retante sem utilização
    height: 50,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 12,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#31Cf67",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
  },
  formulario: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 28,
    marginBottom: 32
  },
  listaVazia: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  listaParticipantes: {
    width: '100%',
    height: 200
  }
});