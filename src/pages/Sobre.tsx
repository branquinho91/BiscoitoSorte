import { View, Text, Image, StyleSheet } from "react-native";

const Sobre = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2019/10/erick-jacquin-freezer-bronca-pesadelo-na-cozinha-reproducao-band-min_fixed_large.jpg",
        }}
        style={styles.thumbnail}
      />

      <Text style={styles.title}>Sobre a Padaria da Sorte</Text>

      <Text style={styles.story}>
        Era uma vez, um homem chamado senhor Otto Bolacha que, um belo dia, decidiu que ser apenas um mestre dos biscoitos não era o suficiente. Ele
        queria mais – ele queria distribuir sorte em cada mordida!
      </Text>

      <Text style={styles.story}>
        Foi assim que, em uma madrugada cheia de farinha e sonhos, a Padaria da Sorte nasceu. Dizem que a primeira fornada foi tão mágica que até o
        forno pediu férias.
      </Text>

      <Text style={styles.story}>
        Desde então, Otto vem aperfeiçoando suas receitas, garantindo que cada biscoito venha com uma pitada de sabedoria (ou pelo menos um bom
        conselho sobre não queimar a língua no café quente).
      </Text>

      <Text style={styles.story}>Sorte ou não, uma coisa é certa: você vai querer mais!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7e4b3",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d2691e",
    marginBottom: 10,
  },
  story: {
    fontSize: 16,
    color: "#8b4513",
    textAlign: "center",
    marginBottom: 15,
  },
});

export default Sobre;
