import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useAuth } from "../src/context/AuthContext";

export default function QRScanScreen() {
  const { user } = useAuth();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const checkAndMark = useMutation(api.qr.checkAndMark.checkAndMark);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // teks peringatan
  if (user?.scanned) {
    return (
      <View style={styles.center}>
        <Text style={styles.header}>QR Already Scanned</Text>
        <Text>You have already scanned the QR code.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (!user) {
      Alert.alert("Not logged in", "Please log in before scanning.");
      return;
    }

    if (scanned) return;
    setScanned(true);

    try {
      await checkAndMark({
        userId: user.id,
        scannedCode: data,
      });

      Alert.alert("Success", "Anda telah di absen untuk jam makan sekarang.");

      // selama scanned = true, user tidak bisa scan lagi, meniru sistem presensi
      setScanned(true);

    } 
    catch (err: any) {
      const message = err?.message ?? String(err);

     if (message.includes("QR_MISMATCH")) {
        Alert.alert("Wrong code", "This QR code is not valid.");
      } 
      else {
        Alert.alert("Scan failed", "An unexpected error occurred.");
        console.error(err);
      }

  setTimeout(() => setScanned(false), 1500);
}
  };

  if (hasPermission === null) {
    return (
      <View style={styles.center}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text>No camera permission</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scan QR</Text>

      <CameraView
        style={styles.camera}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 20, padding: 12 },
  camera: { flex: 1 },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});