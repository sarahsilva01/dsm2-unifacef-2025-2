// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaginaInicial from "./src/screens/PaginaInicialSarah";
import CompromissoTela from "./src/screens/CompromissoTelas";
import CompromissoTime from "./src/screens/CompromissoEquipe";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PaginaInicial"
          component={PaginaInicial}
          options={{ title: "Inicio", headerTitleAlign: "left" }}
        />
        <Stack.Screen
          name="CompromissoTelas"
          component={CompromissoTela}
          options={{ title: "Meus compromissos" }}
        />
        <Stack.Screen
          name="CompromissoEquipe"
          component={CompromissoTime}
          options={{ title: "Compromissos da equipe" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
