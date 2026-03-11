import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthContext } from "./src/context/AuthContext";

export default function Login() {

  const auth = useContext(AuthContext);
  const router = useRouter();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  if (!auth) return null;

  const handleLogin = () => {
    const success = auth.login(username,password);

    if(success){
      router.replace("/(tabs)/profile");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>UNKLAB CAFETERIA SYSTEM</Text>

        <TextInput
          placeholder="Unklab Email"
          style={styles.input}
          onChangeText={setUsername}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f2f2f2"
  },

  card:{
    width:"85%",
    backgroundColor:"white",
    padding:25,
    borderRadius:12,
    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:10,
    elevation:5
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20,
    textAlign:"center"
  },

  input:{
    borderWidth:1,
    borderColor:"#ddd",
    borderRadius:8,
    padding:12,
    marginBottom:15,
    fontSize:16
  },

  button:{
    backgroundColor:"#007AFF",
    padding:14,
    borderRadius:8,
    alignItems:"center",
    marginTop:5
  },

  buttonText:{
    color:"white",
    fontSize:16,
    fontWeight:"600"
  },

  link:{
    marginTop:15,
    color:"#007AFF",
    textAlign:"center"
  }

});