import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Alert } from "react-native";

// Para rodar o servidor JSON Server, execute o comando abaixo no terminal:
// npx json-server --host 192.168.0.2 db.json -p 3000

const Home = () => {
  const [biscoitos, setBiscoitos] = useState([]);

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
    <ScrollView>
      {biscoitos.map((biscoito) => (
        <Text>{biscoito.message}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
