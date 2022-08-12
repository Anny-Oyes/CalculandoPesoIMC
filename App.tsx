import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const CalculandoIMC = () => {
    const alturas = parseFloat(altura);
    const pesoMuscular = parseFloat(peso);

    const resultado = pesoMuscular / (alturas * alturas);

    if (resultado < 18.5) {
      alert(`Estas bajo de peso ${resultado.toFixed(2)} `);
    } else if (resultado >= 18.5 && resultado < 24.9) {
      alert(`Estas en el peso ideal ${resultado.toFixed(2)}`);
    } else if (resultado >= 25.0 && resultado > 29.9) {
      alert(`Estas en sobrepeso ${resultado.toFixed(2)}`);
    } else if (!altura || !peso) {
      alert("Por favor ingresa todos los datos");
    }
  };

  return (
    <View style={style.container}>
      <View style={style.containers}>
        <Text style={style.title}>Calculadora de IMC</Text>

        <Text style={style.text}>Ingresa tu peso en kilogramos (kg)</Text>
        <TextInput
          style={style.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Peso"
          keyboardType="numeric"
        />

        <Text style={style.text}>Ingresa tu altura en centímetros (cm)</Text>
        <TextInput
          style={style.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Altura"
          keyboardType="numeric"
        />

        <TouchableOpacity style={style.button} onPress={CalculandoIMC}>
          <Text style={style.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button2}
          onPress={() => {
            setPeso("");
            setAltura("");
          }}
        >
          <Text style={style.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7CBEB7",
    paddingTop: 150,
  },

  containers: {
    borderWidth: 3,
    borderColor: "#93C7D7",
    width: 500,
    height: 400,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#C1E1EC",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontFamily: "Time new Roman",
    marginRight: 0,
    marginVertical: 30,
    fontSize: 30,
  },

  text: {
    textAlign: "center",
    fontFamily: "Time new Roman",
    fontSize: 20,
  },

  input: {
    height: 30,
    width: "50%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    marginBottom: 15,
    fontFamily: "Times new Roman",
    fontSize: 15,
    borderColor: "#7CBEB7",
  },

  button: {
    height: 40,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    padding: 10,
    fontFamily: "Times new Roman",
    fontSize: 20,
    backgroundColor: "#7CBEB7",
  },

  button2: {
    height: 40,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    padding: 10,
    fontFamily: "Times new Roman",
    fontSize: 20,
    backgroundColor: "#93C7D7",
  },
  buttonText: {
    height: 30,
    width: "40%",
    color: "white",
    textAlign: "center",
    fontFamily: "Time new Roman",
    fontSize: 20,
  },
});
