import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function FarmingConditionsCard() {
  return (
    <View
      style={{
        backgroundColor: "#22b573",
        borderRadius: 12,
        padding: 16,
        marginVertical: 12,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16,
          marginBottom: 8,
        }}
      >
        Today's Farming Conditions
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            name="thermometer"
            size={18}
            color="#fff"
            style={{ marginRight: 6 }}
          />
          <View>
            <Text style={{ color: "#fff" }}>Soil Temperature</Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              22°C
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            name="droplet"
            size={18}
            color="#fff"
            style={{ marginRight: 6 }}
          />
          <View>
            <Text style={{ color: "#fff" }}>Soil Moisture</Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              68%
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            name="activity"
            size={18}
            color="#fff"
            style={{ marginRight: 6 }}
          />
          <View>
            <Text style={{ color: "#fff" }}>Growing Degree Days</Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              15.2
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            name="cloud-rain"
            size={18}
            color="#fff"
            style={{ marginRight: 6 }}
          />
          <View>
            <Text style={{ color: "#fff" }}>Evapotranspiration</Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              4.2mm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
