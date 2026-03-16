import React from "react";
import { Stack } from "expo-router";
import { ConvexReactClient, ConvexProvider } from "convex/react";
import { AuthProvider } from "./src/context/AuthContext";

const CONVEX_URL =
  process.env.EXPO_PUBLIC_CONVEX_URL || "https://modest-mongoose-820.convex.cloud";

const convexClient = new ConvexReactClient(CONVEX_URL);

export default function RootLayout() {
  return (
    <ConvexProvider client={convexClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </ConvexProvider>
  );
}