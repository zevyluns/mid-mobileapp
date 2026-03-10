import { Redirect, Stack, useSegments } from "expo-router";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

function RootLayout() {
  const auth = useContext(AuthContext);
  const segments = useSegments();

  if (!auth) return null;

  const inAuthScreen = segments[0] === "login" ;

  if (!auth.user && !inAuthScreen) {
    return <Redirect href="/login" />;
  }

  return <Stack />;
}

export default function Layout() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}