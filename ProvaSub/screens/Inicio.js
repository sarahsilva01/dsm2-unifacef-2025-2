import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.sub}>Sarah Costa Silva</Text>
      <Text style={styles.sub}>SI – 6º semestre</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("CompDia")}
      >
        <Text style={styles.btnText}>COMPROMISSOS DO DIA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("CompSemana")}
      >
        <Text style={styles.btnText}>COMPROMISSOS DA SEMANA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 32, marginBottom: 10 },
  sub: { fontSize: 16, color: "#444" },
  btn: {
    marginTop: 20,
    backgroundColor: "#555",
    padding: 12,
    width: 250,
    borderRadius: 6,
  },
  btnText: { textAlign: "center", color: "#fff", fontWeight: "bold" },
});
