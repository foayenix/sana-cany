import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Camera } from "lucide-react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { useAppTheme } from "@/utils/theme";
import { ScannerOverlay } from "./ScannerOverlay";
import { ProductModal } from "./ProductModal";
import { CameraPermissionRequest } from "./CameraPermissionRequest";
import { mockProductData } from "@/utils/scannerData";

const { width, height } = Dimensions.get("window");

export function PatientProductScanner() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [flashMode, setFlashMode] = useState("off");
  const [facing, setFacing] = useState("back");
  const [showProductModal, setShowProductModal] = useState(false);
  const [productData, setProductData] = useState(null);
  const cameraRef = useRef(null);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!permission) {
    return <View style={{ flex: 1, backgroundColor: colors.background }} />;
  }

  if (!permission.granted) {
    return (
      <CameraPermissionRequest
        colors={colors}
        isDark={isDark}
        requestPermission={requestPermission}
      />
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return;

    setScanned(true);
    console.log(`Scanned ${type} with data: ${data}`);

    setTimeout(() => {
      setProductData(mockProductData);
      setShowProductModal(true);
      setScanned(false);
    }, 1000);
  };

  const toggleFlash = () => {
    setFlashMode(flashMode === "off" ? "on" : "off");
  };

  const flipCamera = () => {
    setFacing(facing === "back" ? "front" : "back");
  };

  const resetScanner = () => {
    setScanned(false);
    setShowProductModal(false);
    setProductData(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />

      <CameraView
        style={{ flex: 1 }}
        facing={facing}
        flash={flashMode}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: [
            "ean13",
            "ean8",
            "upc_a",
            "upc_e",
            "code128",
            "code39",
          ],
        }}
        ref={cameraRef}
      >
        <ScannerOverlay
          insets={insets}
          colors={colors}
          scanned={scanned}
          flashMode={flashMode}
          toggleFlash={toggleFlash}
          flipCamera={flipCamera}
        />
      </CameraView>

      <ProductModal
        visible={showProductModal}
        productData={productData}
        colors={colors}
        insets={insets}
        onClose={() => setShowProductModal(false)}
        onReset={resetScanner}
      />
    </View>
  );
}
