import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home"
import LiveShow from "./screens/LiveShow"
import ShoppingCart from './screens/ShoppingCart';

export default function App() {
  return (
    <View style = {styles.container}>
      <LiveShow/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
