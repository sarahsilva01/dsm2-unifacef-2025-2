import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prova</Text>
      <Text style={styles.subtitle}>Sarah Costa Silva</Text>

      <View style={styles.buttonsCol}>
        <Button
          title="Tela 2"
          onPress={() => navigation.navigate('InternetImage')}
        />
        <View style={styles.spacer} />
        <Button
          title="Tela 3"
          onPress={() => navigation.navigate('LocalImage')}
        />
        <View style={styles.spacer} />
        <Button
          title=" Tela 4"
          onPress={() => navigation.navigate('IconsRow')}
        />
      </View>
    </View>
  );
}

function InternetImageScreen({ navigation }) {
  return (
  <View style={[styles.container, { backgroundColor: '#6dbd23ff', justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={styles.title}>Tela 2</Text>

      <Image
        source={require ('./assets/image.png')}
        style={{ width: 200, height: 200 }}
        resizeMode="cover"
/>

      <View style={styles.spacer} />
      <Button title="Voltar para tela inicial" onPress={() => navigation.navigate('inicial')} />
    </View>
  );
}

function LocalImageScreen({ navigation }) {
  return (
      <View style={[styles.container, { backgroundColor: '#da2222ff', justifyContent: 'center', alignItems: 'center' }]}>

      <Text style={styles.title}>Tela 3</Text>
      <Image
        source={require ('./assets/imagem1.png')}
        style={{ width: 400, height: 400 }}
        resizeMode="contain"
      />
      <View style={styles.spacer} />
      <Button title="Voltar para tela inicial" onPress={() => navigation.navigate('inicial')} />
    </View>
  );
}

function IconsRowScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela 4</Text>

      <View style={styles.iconsRow}>
        <Ionicons name="home" size={48} color="#1E90FF" />       {/* azul */}
        <MaterialIcons name="favorite" size={48} color="#FF0000" /> {/* vermelho */}
        <FontAwesome5 name="rocket" size={44} color="#32CD32" />   {/* verde */}
      </View>

      <View style={styles.spacer} />
      <Button
        title="Voltar para tela inicial"
        onPress={() => navigation.navigate('inicial')}
        color="#ff1eb4ff" // botão azul
      />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicial">
        <Stack.Screen
          name="inicial"
          component={HomeScreen}
          options={{ title: 'Página Inicial' }}
        />
        <Stack.Screen
          name="InternetImage"
          component={InternetImageScreen}
          options={{ title: 'Tela 2 - Internet' }}
        />
        <Stack.Screen
          name="LocalImage"
          component={LocalImageScreen}
          options={{ title: 'Tela 3 - Local' }}
        />
        <Stack.Screen
          name="IconsRow"
          component={IconsRowScreen}
          options={{ title: 'Tela 4 - Ícones' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  centerAll: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',          // centraliza na horizontal
    justifyContent: 'center',      // centraliza na vertical
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonsCol: {
    gap: 0,
  },
  spacer: { height: 12 },
  netImage: {
    width: '100%',
    height: 260,
    borderRadius: 8,
  },
  iconsRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly', // espaçamento igual ENTRE e nas bordas
    alignItems: 'center',
  },
});
