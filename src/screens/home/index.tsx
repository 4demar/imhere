import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { Participante } from '../../components/participante';

//  'Jose 2', 'Josefa 2', 'Maria 2', 'Pedro 2', 'João 2',
//       'Jose 3', 'Josefa 3', 'Maria 3', 'Pedro 3', 'João 3'

export default function Home() {
  const [listaParticipante, setListaParticipante] = useState<string[]>([])
  const [nomeParticipante, setNomeParticipante] = useState('')


  const inserirParticipante = () => {
    if (nomeParticipante === '')
      return Alert.alert('Participante cadastrado', 'Nome de participante invalido, verifique!')
    if (listaParticipante.includes(nomeParticipante))
      return Alert.alert('Participante cadastrado', 'Já existe um participante com esse nome')

    //Com imutabilidade
    setListaParticipante(presState => [...presState, nomeParticipante])

    //Sem imutabilidade
    //listaParticipante.push(nomeParticipante)
    Alert.alert(`Novo participante inserido`)
    setNomeParticipante('')
  }

  const removerParticipante = (nome: string) => {
    const lista = listaParticipante.filter(x => x !== nome)

    if (lista === listaParticipante) {
      return Alert.alert('Problema ao remover este participante, execute novamente')
    }

    Alert.alert('Participante removido!')
    setListaParticipante(lista)
  }

  const perguntaRemover = (nome: string) => {
    Alert.alert('Remover', `Deseja remover o participante ${nome}?`, [
      {
        text: 'Sim',
        onPress: () => removerParticipante(nome)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Nome do evento
      </Text>

      <Text style={styles.subTitulo}>
        Terça, 31 de Dezembro de 2024
      </Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          value={nomeParticipante}
          onChangeText={setNomeParticipante}
        // keyboardType='numeric'
        />
        <TouchableOpacity style={styles.button} onPress={inserirParticipante}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <FlatList
        showsVerticalScrollIndicator={false}
        data={listaParticipante}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participante
            key={item}
            nome={item}
            setRemover={perguntaRemover}
          />
        )}
        ListEmptyComponent={() => (
          <>
            <Text style={styles.listaVazia}>
              Não existe participantes nesse evento.
            </Text>
            <Text style={styles.listaVazia}>
              Fique a vontade para inserir.
            </Text>
          </>
        )}
      />
    </View>
  );
}



// Carrega "TODOS" os componentes na tela, se tiver 30 será exibido somente 10, dirente do FlatList
//
{/* 

<ScrollView
  showsVerticalScrollIndicator={false}
>
  {listaParticipante.map((nome, index) => (
    <Participante
      key={nome}
      nome={nome}
      setRemover={removerParticipante}
    />
  ))}
</ScrollView> 

*/}