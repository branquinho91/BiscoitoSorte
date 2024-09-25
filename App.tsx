import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Apresentacao from "./src/pages/Apresentacao";
import Login from "./src/pages/Login";
import Sobre from "./src/pages/Sobre";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Apresentação" component={Apresentacao} options={{ header: () => <></> }} />
        <Stack.Screen name="Login" component={Login} options={{ header: () => <></> }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ headerStyle: { backgroundColor: "#f7e4b3" } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
