import { useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../src/context/AuthContext";

export default function About() {

  const auth = useContext(AuthContext);
  const router = useRouter();

  if (!auth) return null;

const handleLogout = () => {
  auth.logout();
};

  return (
    <View style={styles.container}>

      <Text style={styles.title}>About Page</Text>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:22,
    marginBottom:20
  },

  logoutButton:{
    backgroundColor:"#ff3b30",
    padding:12,
    borderRadius:8
  },

  logoutText:{
    color:"white",
    fontWeight:"bold"
  }

});