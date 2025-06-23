import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

export default function AppSettingsCard() {
  const [push, setPush] = useState(true);
  const [offline, setOffline] = useState(true);
  const [auto, setAuto] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
        App Settings
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <Text style={{ flex: 1 }}>Push Notifications</Text>
        <Switch value={push} onValueChange={setPush} />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <Text style={{ flex: 1 }}>Offline Mode</Text>
        <Switch value={offline} onValueChange={setOffline} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ flex: 1 }}>Auto-download Data</Text>
        <Switch value={auto} onValueChange={setAuto} />
      </View>
    </View>
  );
}
