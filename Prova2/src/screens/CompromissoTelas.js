import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ITENS = [
  { hora: "09:30", texto: 'Reunião “Daily”' },
  { hora: "14:00", texto: "Reunião com cliente Carros & Carros" },
  { hora: "16:30", texto: "Prazo final Projeto X" },
];

export default function CompromissoTelas() {
  return (
    <View style={s.container}>
      <View style={s.headerWrap}>
        <Text style={s.euTitle}>(EU)</Text>
        <Text style={s.euLine}>Sarah costa silva</Text>
        <Text style={s.euLine}>SI - 6º Semestre</Text>
      </View>

      <View style={s.lista}>
        {ITENS.map((it) => (
          <Text key={it.hora} style={s.itemLine}>
            {it.hora} {it.texto}
          </Text>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  headerWrap: { alignItems: "center", marginBottom: 12 },
  euTitle: { fontWeight: "800", fontSize: 16, marginBottom: 4, textAlign: "center" },
  euLine: { color: "#444", textAlign: "center" },
  lista: { marginTop: 8, width: "100%" },
  itemLine: { fontSize: 16, marginBottom: 10 },
});
