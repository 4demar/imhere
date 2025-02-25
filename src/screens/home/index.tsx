import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { Participante } from '../../components/participante';

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
    setNomeParticipante('')
  }

  const removerParticipante = (nome: string) => {
    Alert.alert('Remover', `Deseja remover o participante ${nome}?`, [
      {
        text: 'Sim',
        onPress: () => setListaParticipante(prevState => prevState.filter(participante => participante !== nome))
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
            setRemover={removerParticipante}
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