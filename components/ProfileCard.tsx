import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Avatar placeholder */}
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#e3edff",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
          }}
        >
          <Text style={{ fontSize: 28, color: "#1976d2" }}>👤</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Jean Baptiste
          </Text>
          <Text style={{ color: "#666" }}>Farmer, Kigali Province</Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginTop: 8 }}>
        <Text style={{ color: "#1976d2", fontWeight: "bold" }}>
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
