import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import wateringPlants from '../../assets/watering_ilust.png'

export function WelcomeView() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie suas plantas de forma fácil</Text>
      <View style={styles.space} /> 
      <Image source={wateringPlants} />
        <View style={styles.space} /> 
        <Text style={styles.description}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
sempre que precisar.
        </Text>
        <View style={styles.space} /> 
      <TouchableOpacity style={{ width: 56, height: 56, backgroundColor: "#32B768" , borderRadius: 12, alignItems: "center", justifyContent: "center",}}>
        <Text style={{fontSize: 18, color: "white"}}> > </Text>
      </TouchableOpacity>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#eaeaea"
  },
  title:{
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
    description: {
    fontWeight: "normal",
    lineHeight: 25,
    fontSize: 17,
    textAlign: "center",
    color: "#5C6660",
  },
  space: {
    padding: 24,
  }
})

export default WelcomeView;