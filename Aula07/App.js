import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const produtos = [
  { id: "1", nome: "Camiseta Azul", preco: 79.9, categoria: "Roupas" },
  { id: "2", nome: "Tênis Esportivo", preco: 299.9, categoria: "Calçados" },
  { id: "3", nome: "Relógio Digital", preco: 199.9, categoria: "Acessórios" },
  { id: "4", nome: "Jaqueta Jeans", preco: 159.9, categoria: "Roupas" },
  { id: "5", nome: "Sandália Feminina", preco: 89.9, categoria: "Calçados" },
];

export default function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const categorias = ["Todos", "Roupas", "Calçados", "Acessórios"];

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaSelecionada);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Catálogo de Produtos</Text>

      <View style={styles.filtros}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.botaoFiltro,
              categoriaSelecionada === cat && styles.botaoAtivo,
            ]}
            onPress={() => setCategoriaSelecionada(cat)}
          >
            <Text style={styles.textoFiltro}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            <Text style={styles.categoria}>{item.categoria}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f2f2f2" },
  titulo: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  filtros: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
  botaoFiltro: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 8,
  },
  botaoAtivo: {
    backgroundColor: "#3b82f6",
  },
  textoFiltro: {
    color: "#000",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  nome: { fontSize: 18, fontWeight: "bold" },
  preco: { color: "#3b82f6", marginVertical: 5 },
  categoria: { color: "#666" },
});
