import { useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../src/context/AuthContext";

export default function Home() {

  const auth = useContext(AuthContext);
  const router = useRouter();

  if (!auth) return null;

  const handleLogout = () => {
    auth.logout();
  };

  const name = auth.user?.name ?? "Guest";

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Home</Text>

      <Text style={styles.welcome}>
        Welcome, {name}
      </Text>

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
    marginBottom:10
  },

  welcome:{
    fontSize:18,
    marginBottom:20
  },

  logoutButton:{
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor:"#ff3b30",
    padding:12,
    borderRadius:8
  },

  logoutText:{
    color:"white",
    fontWeight:"bold"
  }

});