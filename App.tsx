import { StatusBar, StyleSheet, View } from 'react-native';
import Home from './src/screens/home';

export default function App() {

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 18
  },
  statusBar: {

  }
});