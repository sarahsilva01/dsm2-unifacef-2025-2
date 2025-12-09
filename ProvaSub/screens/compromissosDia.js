import { View, Text, StyleSheet, FlatList } from "react-native";
import compromissos from "../data/compDia";

export default function CompDia() {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>11/11 (ter)</Text>

      <Text style={styles.sub}>Sarah Costa Silva</Text>
      <Text style={styles.sub}>SI – 6º semestre</Text>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.descr}</Text>
        )}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  data: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  sub: { textAlign: "center", color: "#666" },
  item: { fontSize: 18, paddingVertical: 10 },
});
