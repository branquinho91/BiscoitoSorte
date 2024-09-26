import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, Alert } from "react-native";
import { useState } from "react";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateToHome = () => navigation.navigate("Home");

  const handleLogin = () => {
    if (email === "biscoito@gmail.com" && password === "123456") {
      navigateToHome();
    } else {
      Alert.alert("Erro", "Email ou senha incorretos.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Será que hoje é o seu dia de sorte? Vamos descobrir!</Text>
      </View>

      <View style={styles.bottomSection}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#8b4513"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8b4513"
          secureTextEntry
          keyboardType="number-pad"
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.passwordRow}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9933",
    paddingHorizontal: 10,
  },
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  bottomSection: {
    flex: 2,
    backgroundColor: "#f7e4b3",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d2691e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    color: "#8b4513",
  },
  passwordRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  forgotPassword: {
    color: "#d2691e",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#d2691e",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: "#999",
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d2691e",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "#d2691e",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Login;
