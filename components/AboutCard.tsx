import React from "react";
import { View, Text } from "react-native";

export default function AboutCard() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 6 }}>
        About
      </Text>
      <Text style={{ color: "#444" }}>MeteoRwanda Mobile App v1.0.0</Text>
      <Text style={{ color: "#444" }}>Rwanda Meteorology Agency</Text>
      <Text style={{ color: "#888", marginTop: 8, fontSize: 12 }}>
        © 2025 All rights reserved
      </Text>
    </View>
  );
}
