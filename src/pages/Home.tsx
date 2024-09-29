import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Alert, FlatList } from "react-native";

// Para rodar o servidor JSON Server, execute o comando abaixo no terminal:
// npx json-server --host 192.168.0.2 db.json -p 3000

type Biscoito = {
  message: string;
  isSpecial: boolean;
  brand: string;
  prize: string;
  id: number;
};

const Home = () => {
  const [biscoitos, setBiscoitos] = useState<Biscoito[]>([]);

  /* 
  Forma com async await
  async function carregarDados() {
      try {
          const response = await axios.get('http://192.168.0.2:3000/biscoitos');
          setBiscoitos(response.data);
      } catch (error) {
          Alert.alert("DEU RUIM!", error.message);
      }
  }

  useEffect(() => {
      carregarDados()
  }, []) // dispara uma única vez
  */

  useEffect(() => {
    axios
      .get("http://192.168.0.2:3000/biscoitos")
      .then((response) => {
        setBiscoitos(response.data);
      })
      .catch((error) => {
        Alert.alert("DEU RUIM!", error.message);
      });
  }, []);

  return (
    <SafeAreaView>
      {/* FlatList: Parâmetro item é necessário. Utilizar o : para apelidar o item */}
      <FlatList data={biscoitos} renderItem={({ item: biscoito }) => <Text>{biscoito.message}</Text>} />

      {/* 
        <ScrollView>
          {biscoitos.map((biscoito) => (
            <Text>{biscoito.message}</Text>
          ))}
        </ScrollView>
      */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
