import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

type HeaderBarProps = {
  onMenuPress?: () => void;
};

export default function HeaderBar({ onMenuPress }: HeaderBarProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 16 }}>
      {/* Logo icon */}
      <MaterialIcons
        name="cloud"
        size={40}
        color="#1976d2"
        style={{ marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>MeteoRwanda</Text>
        <Text style={{ color: "#666" }}>Weather & Climate Services</Text>
      </View>
      {/* Menu icon */}
      <Feather name="menu" size={28} color="#888" onPress={onMenuPress} />
    </View>
  );
}
