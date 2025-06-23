import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

type HeaderBarProps = {
  onMenuPress?: () => void;
};

export default function HeaderBar({ onMenuPress }: HeaderBarProps) {
  const handleUSSDPress = () => {
    Linking.openURL("tel:*123*45%23");
  };
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
      {/* USSD button */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 6,
          backgroundColor: "#e3f2fd",
        }}
        onPress={handleUSSDPress}
      >
        <MaterialIcons
          name="cloud"
          size={22}
          color="#1976d2"
          style={{ marginRight: 4 }}
        />
        <Text style={{ fontWeight: "bold", color: "#1976d2", fontSize: 16 }}>
          USSD
        </Text>
      </TouchableOpacity>
    </View>
  );
}
