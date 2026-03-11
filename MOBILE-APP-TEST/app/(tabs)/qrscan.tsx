import { Camera, CameraView } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";


const QRScan = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);

  // The expected QR code value
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

    if (data === expectedCode) {
      Alert.alert("Success", "Code scanned");
    } else {
      Alert.alert("Error", "Scan failed");
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
      <Text style={styles.title}>QR Code Scanner</Text>

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
