import { View, Text, StyleSheet, SectionList } from "react-native";
import compromissos from "../data/compSemana";

export default function CompSemana() {
  const sections = compromissos.map((item) => ({
    title: item.titulo,
    data: item.dados
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.sub}>Sarah Costa Silva</Text>
      <Text style={styles.sub}>SI – 6º semestre</Text>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}

        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}

        contentContainerStyle={{ paddingTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  sub: {
    textAlign: "center",
    color: "#666",
  },

  header: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  item: {
    fontSize: 16,
    marginVertical: 4,
    paddingLeft: 10,
    textAlign: "left",
  },
});
