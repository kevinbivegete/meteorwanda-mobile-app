import React from "react";
import { View, Text } from "react-native";

type AlertCardProps = {
  title: string;
  description: string;
  time: string;
  color: string;
  severity?: "HIGH" | "MEDIUM" | "LOW";
  icon?: React.ReactNode;
  backgroundColor?: string;
};

export default function AlertCard({
  title,
  description,
  time,
  color,
  severity,
  icon,
  backgroundColor,
}: AlertCardProps) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor || "#fff",
        borderRadius: 12,
        padding: 12,
        borderLeftWidth: 5,
        borderLeftColor: color,
        marginBottom: 12,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}
      >
        {/* Icon placeholder */}
        {icon || (
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#eee",
              borderRadius: 10,
              marginRight: 8,
            }}
          />
        )}
        <Text style={{ fontWeight: "bold", flex: 1 }}>{title}</Text>
        {severity && (
          <View
            style={{
              backgroundColor:
                severity === "HIGH"
                  ? "#ffb3b3"
                  : severity === "MEDIUM"
                  ? "#fff7b3"
                  : "#b3ffd9",
              borderRadius: 8,
              paddingHorizontal: 8,
              paddingVertical: 2,
              marginLeft: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 12, color: "#333" }}>
              {severity}
            </Text>
          </View>
        )}
      </View>
      <Text style={{ color: "#444", marginBottom: 4 }}>{description}</Text>
      <Text style={{ color: "#888", fontSize: 12 }}>{time}</Text>
    </View>
  );
}
