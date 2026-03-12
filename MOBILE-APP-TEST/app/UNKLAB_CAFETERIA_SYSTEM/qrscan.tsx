import { Camera, CameraView } from "expo-camera";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../src/context/AuthContext";

const QRScan = () => {
  // state menyimpan status izin kamera (boolean T/F atau null)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  // dipanggil untuk mencegah scan kedua kali, jika true maka scan berikutnya tidak akan diproses
  const [scanned, setScanned] = useState(false);
  // state untuk mengontrol kamera aktif atau tidak, defaultnya false
  const [scanning, setScanning] = useState(false);
  // menyimpan daftar username yang sudah scan
  const [scannedUsers, setScannedUsers] = useState<string[]>([]);
  
  const auth = useContext(AuthContext);

  const expectedCode = "12345678";

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {

    setScanned(true);
    setScanning(false);

    if (!auth?.user) {
      Alert.alert("Error", "No logged in user.");
      return;
    }

    const username = auth.user.username;

    // check if user already scanned
    if (scannedUsers.includes(username)) {
      Alert.alert("Error", "Anda sudah melakukan scan sebelumnya.");
      return;
    }

    if (data === expectedCode) {

      setScannedUsers([...scannedUsers, username]);

      Alert.alert("Success", `Berhasil! Scan dicatat untuk ${auth.user.name}`);
    } 
    
    else {
      Alert.alert("Error", "Gagal: Kode tidak valid.");
    }
  };

  const startScanning = () => {
    setScanned(false);
    setScanning(true);
  };

  const stopScanning = () => {
    setScanning(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SCAN ABSENSI DINING</Text>

      {!scanning ? (
        <Button title="Start Scanning" onPress={startScanning} />
      ) : (
        <>
          <CameraView
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
            style={StyleSheet.absoluteFillObject}
          />
          <Button title="Stop Scanning" onPress={stopScanning} />
        </>
      )}

      {scanned && (
        <Button title="Scan Again" onPress={startScanning} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 32,
    alignSelf: "center",
    fontWeight: "700",
  },
});

export default QRScan;