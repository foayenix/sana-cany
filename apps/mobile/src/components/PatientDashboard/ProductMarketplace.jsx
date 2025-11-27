import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { ShoppingBag, Star, ChevronRight } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function ProductMarketplace() {
  const { colors } = useAppTheme();

  const featuredProducts = [
    {
      id: 1,
      name: "Organic Turmeric",
      brand: "Nature's Best",
      price: "$29.99",
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300",
      tag: "Anti-inflammatory",
      discount: "20% OFF",
    },
    {
      id: 2,
      name: "Vitamin D3 5000IU",
      brand: "Pure Health",
      price: "$24.99",
      rating: 4.9,
      reviews: 512,
      image:
        "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300",
      tag: "Immune Support",
    },
    {
      id: 3,
      name: "Omega-3 Fish Oil",
      brand: "Arctic Pure",
      price: "$39.99",
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
      tag: "Heart Health",
    },
  ];

  const categories = [
    { name: "Supplements", icon: "💊", count: 150 },
    { name: "Herbs", icon: "🌿", count: 85 },
    { name: "Skincare", icon: "🧴", count: 45 },
    { name: "Fitness", icon: "💪", count: 32 },
  ];

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginVertical: 12,
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: colors.primary + "20",
              borderRadius: 8,
              padding: 8,
              marginRight: 12,
            }}
          >
            <ShoppingBag size={20} color={colors.primary} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              Product Marketplace
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginTop: 2,
              }}
            >
              Curated for your health goals
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.primary + "10",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_500Medium",
              color: colors.primary,
              marginRight: 4,
            }}
          >
            View All
          </Text>
          <ChevronRight size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: colors.background,
              borderRadius: 12,
              padding: 12,
              marginRight: 12,
              alignItems: "center",
              minWidth: 80,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={{ fontSize: 20, marginBottom: 4 }}>
              {category.icon}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
                marginBottom: 2,
              }}
            >
              {category.name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
              }}
            >
              {category.count} items
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Products */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {featuredProducts.map((product, index) => (
          <TouchableOpacity
            key={product.id}
            style={{
              backgroundColor: colors.background,
              borderRadius: 12,
              padding: 12,
              marginRight: 16,
              width: 160,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            {/* Product Image */}
            <View style={{ position: "relative", marginBottom: 8 }}>
              <Image
                source={{ uri: product.image }}
                style={{
                  width: "100%",
                  height: 80,
                  borderRadius: 8,
                  backgroundColor: colors.border,
                }}
                resizeMode="cover"
              />
              {product.discount && (
                <View
                  style={{
                    position: "absolute",
                    top: 4,
                    left: 4,
                    backgroundColor: colors.accent,
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: "Inter_600SemiBold",
                      color: "white",
                    }}
                  >
                    {product.discount}
                  </Text>
                </View>
              )}
              <View
                style={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: colors.primary + "20",
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: "Inter_500Medium",
                    color: colors.primary,
                  }}
                >
                  {product.tag}
                </Text>
              </View>
            </View>

            {/* Product Info */}
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
                marginBottom: 2,
              }}
              numberOfLines={2}
            >
              {product.name}
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginBottom: 8,
              }}
            >
              {product.brand}
            </Text>

            {/* Rating */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Star size={12} color={colors.accent} fill={colors.accent} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_500Medium",
                  color: colors.textPrimary,
                  marginLeft: 4,
                }}
              >
                {product.rating}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                  marginLeft: 4,
                }}
              >
                ({product.reviews})
              </Text>
            </View>

            {/* Price and Buy Button */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter_700Bold",
                  color: colors.primary,
                }}
              >
                {product.price}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 6,
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Inter_600SemiBold",
                    color: "white",
                  }}
                >
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
