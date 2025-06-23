import React from "react";
import { View, Text } from "react-native";

type SeasonCardProps = {
  name: string;
  period: string;
  color: string;
};

export default function SeasonCard({ name, period, color }: SeasonCardProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 10,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      {/* Calendar icon placeholder */}
      <View
        style={{
          width: 28,
          height: 28,
          backgroundColor: "#fff",
          borderRadius: 6,
          marginRight: 10,
        }}
      />
      <View>
        <Text style={{ fontWeight: "bold", color: "#222" }}>{name}</Text>
        <Text style={{ color: "#222" }}>{period}</Text>
      </View>
    </View>
  );
}
