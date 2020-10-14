// In App.js in a new project

import * as React from 'react';
import { View, Text , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* Instanciamos los Components*/
import Personajes from './pages/Personajes';
import DetallePersonaje from './pages/DetailsView';
import Pokemons from './pages/Pokemons';

/* Creamos la consante Stack para la navegacion*/
const Stack = createStackNavigator();

/* Funcion home pantalla inicio */
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Personajes Animados</Text>
      <Button
        title="Ingresar"
        /* Se realiza la navegacion pasando parametros  */
        onPress={() => {navigation.navigate('Details',{itemId: 86, otherParam : 'anything you want here',});}}
      />
    </View>
  );
}
/* Funcion detalle pantalla  */
function DetailsScreen({ route,navigation }) {
  /* Creamos 2 constantes que almacena los parametros  */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalle Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details',{itemId: Math.floor(Math.random() * 100)})}
      />
      <Button title="Personajes" onPress={() => navigation.navigate('Personaje')} />
      <Button title="Pokemons" onPress={() => navigation.navigate('Pokemons')} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
/* LLamada a los components , asignamos valor y nombre para ser llamado en la accion onPress  */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Principal' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen
          name="Personaje"
          component={Personajes}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen
          name="DetailsView"
          component={DetallePersonaje}
          options={{ title: 'Detalle' }}
        />
         <Stack.Screen
          name="Pokemons"
          component={Pokemons}
          options={{ title: 'Detalle' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;