import { StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import Home from './src/screens/home';

export default function App() {
  const colorScheme = useColorScheme()

  console.log(colorScheme)
  return (
    <>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <View style={colorScheme === 'dark' ? styles.light : styles.dark}>
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dark: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 18
  },
  light: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 18
  },
  statusBar: {

  }
});