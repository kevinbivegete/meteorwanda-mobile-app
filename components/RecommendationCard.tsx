import React from "react";
import { View, Text } from "react-native";

type RecommendationCardProps = {
  title: string;
  description: string;
};

export default function RecommendationCard({
  title,
  description,
}: RecommendationCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 12,
        borderLeftWidth: 4,
        borderLeftColor: "#22b573",
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 10,
      }}
    >
      {/* Icon placeholder */}
      <View
        style={{
          width: 24,
          height: 24,
          backgroundColor: "#e0f7e9",
          borderRadius: 12,
          marginRight: 10,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 2 }}>{title}</Text>
        <Text style={{ color: "#444" }}>{description}</Text>
      </View>
    </View>
  );
}
