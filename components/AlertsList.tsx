import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AlertCard from "./AlertCard";

export default function AlertsList() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        margin: 16,
        padding: 12,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, flex: 1 }}>
          Active Alerts
        </Text>
        <View
          style={{
            backgroundColor: "#f44336",
            borderRadius: 10,
            paddingHorizontal: 8,
            paddingVertical: 2,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}>
            2
          </Text>
        </View>
      </View>
      <AlertCard
        title="Heavy Rainfall Warning"
        description="Northern Province (Musanze, Burera) - Expected: 50-80mm in next 6 hours"
        time="15 min ago"
        color="#f44336"
        severity="HIGH"
        icon={<Text style={{ fontSize: 18, marginRight: 8 }}>⚠️</Text>}
        backgroundColor="#fff5f5"
      />
      <AlertCard
        title="Flood Risk"
        description="Nyabarongo River basin - Water level: 4.2m (Warning threshold: 4.0m)"
        time="32 min ago"
        color="#ffeb3b"
        severity="MEDIUM"
        icon={<Text style={{ fontSize: 18, marginRight: 8 }}>🔥</Text>}
        backgroundColor="#fffde7"
      />
      <TouchableOpacity style={{ marginTop: 8, alignItems: "center" }}>
        <Text style={{ color: "#1976d2", fontWeight: "bold" }}>
          View All Alerts &gt;
        </Text>
      </TouchableOpacity>
    </View>
  );
}
