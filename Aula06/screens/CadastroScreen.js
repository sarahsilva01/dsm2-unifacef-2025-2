import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erros, setErros] = useState({});

  const validar = () => {
    let valid = true;
    const novosErros = {};

    if (!nome.trim()) {
      novosErros.nome = 'Digite seu nome completo';
      valid = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
      novosErros.email = 'Digite um e-mail válido';
      valid = false;
    }

    if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter no mínimo 6 caracteres';
      valid = false;
    }

    if (senha !== confirmarSenha) {
      novosErros.confirmarSenha = 'As senhas não coincidem';
      valid = false;
    }

    if (!/^\d+$/.test(telefone)) {
      novosErros.telefone = 'O telefone deve conter apenas números';
      valid = false;
    }

    setErros(novosErros);
    return valid;
  };

  const handleCadastro = () => {
    if (validar()) {
      navigation.navigate('Resultado', {
        nome,
        email,
        telefone,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Faça seu Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      {erros.confirmarSenha && <Text style={styles.erro}>{erros.confirmarSenha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        value={telefone}
        onChangeText={setTelefone}
      />
      {erros.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

      {/* Botão personalizado */}
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // 🌈 Cor de fundo
  container: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#EAF2FF' // 👈 troque aqui a cor de fundo
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20,
    color: '#2B2B2B'
  },
  input: {
    borderWidth: 1,
    borderColor: '#86882dff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF'
  },
  erro: { 
    color: 'red', 
    marginBottom: 8 
  },
  // 🎨 Botão estilizado
  botao: {
    backgroundColor: '#e4e8ecff', // 👈 troque aqui a cor do botão
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  textoBotao: {
    color: '#be3333ff', // cor do texto do botão
    fontWeight: 'bold',
    fontSize: 16
  },
});
