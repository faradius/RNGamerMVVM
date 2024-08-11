import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'

export const App = () => {
  return (
    <View>
      <Text style={styles.title}>
        Logueate Para Jugar
      </Text>

      <Image 
        style={styles.image}
        source={require('./assets/img/controller.png')}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Correo Electronico'
      />
      <TextInput
        style={styles.textInput}
        placeholder='Contraseña'
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.textRegister}>
        Registrate Ahora
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
    marginBottom: 20
  },
  
  image:{
    height: 200,
    width: 200
  },

  textInput:{
    borderBottomWidth: 1,
    borderBottomColor: '000000',
    fontSize: 18,
    marginTop: 20,
    marginHorizontal: 30
  },

  button:{
    backgroundColor: "red",
    marginHorizontal: 30,
    marginTop: 20,
    height:50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton:{
    color: 'white',
    fontSize: 19
  },

  textRegister:{
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
  }
});

export default App;