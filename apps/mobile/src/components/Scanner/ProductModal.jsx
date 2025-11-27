import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Alert,
  Dimensions,
} from "react-native";
import { X } from "lucide-react-native";
import { ProductInfo } from "./ProductInfo";
import { ProductRatings } from "./ProductRatings";
import { ProductWarnings } from "./ProductWarnings";
import { ProductDosage } from "./ProductDosage";
import { ProductAlternatives } from "./ProductAlternatives";
import { getSafetyColor, getSafetyIcon } from "@/utils/scannerHelpers";

const { height } = Dimensions.get("window");

export function ProductModal({
  visible,
  productData,
  colors,
  insets,
  onClose,
  onReset,
}) {
  if (!productData) return null;

  const SafetyIcon = getSafetyIcon(productData.safetyLevel);
  const safetyColor = getSafetyColor(productData.safetyLevel, colors);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: colors.surface,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            maxHeight: height * 0.9,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: colors.borderLight,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              Product Analysis
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: colors.surfaceVariant,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <X size={18} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
          >
            <View style={{ padding: 20 }}>
              <ProductInfo
                productData={productData}
                colors={colors}
                SafetyIcon={SafetyIcon}
                safetyColor={safetyColor}
              />

              <ProductRatings productData={productData} colors={colors} />

              {productData.warnings.length > 0 && (
                <ProductWarnings
                  warnings={productData.warnings}
                  colors={colors}
                />
              )}

              <ProductDosage
                dosageRecommendation={productData.dosageRecommendation}
                colors={colors}
              />

              {productData.alternatives.length > 0 && (
                <ProductAlternatives
                  alternatives={productData.alternatives}
                  colors={colors}
                />
              )}

              <View style={{ flexDirection: "row", gap: 12 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: colors.surfaceVariant,
                    borderRadius: 16,
                    padding: 16,
                    alignItems: "center",
                  }}
                  onPress={() => {
                    onClose();
                    onReset();
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_600SemiBold",
                      color: colors.textPrimary,
                    }}
                  >
                    Scan Another
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: colors.primary,
                    borderRadius: 16,
                    padding: 16,
                    alignItems: "center",
                  }}
                  onPress={() => {
                    Alert.alert(
                      "Added to Profile",
                      "Product added to your health tracking.",
                    );
                    onClose();
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_600SemiBold",
                      color: "white",
                    }}
                  >
                    Save to Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
