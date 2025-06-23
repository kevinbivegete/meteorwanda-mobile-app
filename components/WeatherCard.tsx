import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function WeatherCard() {
  return (
    <View
      style={{
        backgroundColor: "#6c7a89",
        borderRadius: 16,
        padding: 20,
        margin: 16,
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
        Kigali City
      </Text>
      <Text style={{ color: "#e0e0e0", marginBottom: 8 }}>Monday, June 16</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        {/* Weather icon */}
        <MaterialIcons
          name="cloud"
          size={40}
          color="#e0e0e0"
          style={{ marginRight: 12 }}
        />
        <Text style={{ color: "#fff", fontSize: 32, fontWeight: "bold" }}>
          24°C
        </Text>
      </View>
      <Text style={{ color: "#fff", marginBottom: 8 }}>Partly Cloudy</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ alignItems: "center" }}>
          <Feather name="droplet" size={18} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 12 }}>Humidity</Text>
          <Text style={{ color: "#fff" }}>73%</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Feather name="wind" size={18} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 12 }}>Wind</Text>
          <Text style={{ color: "#fff" }}>8 km/h</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Feather name="cloud-rain" size={18} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 12 }}>Rain</Text>
          <Text style={{ color: "#fff" }}>0mm</Text>
        </View>
      </View>
    </View>
  );
}
