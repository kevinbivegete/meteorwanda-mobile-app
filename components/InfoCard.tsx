import React from "react";
import { View, Text } from "react-native";

type InfoCardProps = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

export default function InfoCard({ label, value, icon }: InfoCardProps) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        margin: 4,
      }}
    >
      <Text style={{ color: "#888", fontWeight: "500" }}>{label}</Text>
      {icon && <View style={{ marginVertical: 4 }}>{icon}</View>}
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{value}</Text>
    </View>
  );
}
