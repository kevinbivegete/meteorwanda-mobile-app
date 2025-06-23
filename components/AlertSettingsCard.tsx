import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

export default function AlertSettingsCard() {
  const [rain, setRain] = useState(true);
  const [wind, setWind] = useState(true);
  const [temp, setTemp] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 16,
        marginTop: 8,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
        Alert Settings
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <Text style={{ flex: 1 }}>Heavy Rain Alerts</Text>
        <Switch value={rain} onValueChange={setRain} />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <Text style={{ flex: 1 }}>Wind Speed Alerts</Text>
        <Switch value={wind} onValueChange={setWind} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ flex: 1 }}>Temperature Alerts</Text>
        <Switch value={temp} onValueChange={setTemp} />
      </View>
    </View>
  );
}
