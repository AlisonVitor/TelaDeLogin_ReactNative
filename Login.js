import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      console.log(`Email: ${email} - Password: ${password}`);
    }
  
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/netflix-logo.png')} />
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email ou número de telefone"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    logo: {
      width: '50%',
      height: 100,
      resizeMode: 'contain',
      marginBottom: 30,
    },
    inputsContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '100%',
      padding: 15,
      borderWidth: 1,
      borderColor: '#333',
      marginBottom: 15,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    loginButton: {
      width: '100%',
      backgroundColor: '#e50914',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 15,
    },
    loginButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    forgotPassword: {
      color: '#fff',
      textDecorationLine: 'underline',
    },
  });
  
  export default Login;
