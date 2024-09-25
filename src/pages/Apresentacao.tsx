import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const Apresentacao = ({ navigation }) => {
  const navigateToLogin = () => navigation.navigate("Login");
  const navigateToSobre = () => navigation.navigate("Sobre");

  return (
    <SafeAreaView style={styles.safe}>
      <LottieView style={styles.animation} autoPlay loop source={require("../../assets/gato-caixa.json")} />

      <Text style={styles.title}>Gato da caixa</Text>
      <Text style={styles.subtitle}>Porque nada tão sábio como um gato preto te dando conselhos de vida</Text>

      <TouchableOpacity style={styles.signInButton} activeOpacity={0.6} onPress={navigateToLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.aboutButton} activeOpacity={0.6} onPress={navigateToSobre}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7e4b3",
  },
  title: {
    fontSize: 30,
    color: "#d2691e",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#d2691e",
    marginBottom: 40,
    marginHorizontal: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  animation: {
    width: 200,
    height: 200,
  },
  signInButton: {
    width: 200,
    height: 40,
    backgroundColor: "#8b4513",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  aboutButton: {
    width: 200,
    height: 40,
    backgroundColor: "#d2691e",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Apresentacao;
