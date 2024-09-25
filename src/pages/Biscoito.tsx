import { StatusBar, StyleSheet, Text, SafeAreaView, Button } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";

const mensagens = ["Bacon", "Maionese", "Hamburguer", "Fritas", "Bife"];

const Biscoito = () => {
  const [mensagemSelecionada, setMensagemSelecionada] = useState<string | null>(null);
  const [indiceAnterior, setIndiceAnterior] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  const exibirMensagem = () => {
    setCount(count + 1);
    let numeroAleatorio: number;

    do {
      numeroAleatorio = Math.floor(Math.random() * mensagens.length);
    } while (numeroAleatorio === indiceAnterior);

    setIndiceAnterior(numeroAleatorio);
    setMensagemSelecionada(mensagens[numeroAleatorio]);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>{mensagemSelecionada}</Text>
      <LottieView autoPlay source={require("./assets/cookie.json")} style={styles.animation} />
      <Button onPress={exibirMensagem} title="Quebrar biscoito" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default Biscoito;
