import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const Modelo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Modelo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Modelo;
