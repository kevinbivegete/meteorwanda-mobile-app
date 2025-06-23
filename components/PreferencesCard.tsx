import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, View } from "react-native";

const pickerStyle = {
  color: "#222",
  fontSize: 16,
};

export default function PreferencesCard() {
  const [language, setLanguage] = useState("English");
  const [unit, setUnit] = useState("Celsius (°C)");

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
        Preferences
      </Text>
      <Text style={{ marginBottom: 4 }}>Language</Text>
      <View
        style={{
          backgroundColor: "#f5f6fa",
          borderRadius: 8,
          marginBottom: 12,
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={language}
          onValueChange={setLanguage}
          style={{ height: 54, paddingHorizontal: 12, fontSize: 18 }}
          itemStyle={{ fontSize: 18, paddingVertical: 8 }}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Kinyarwanda" value="Kinyarwanda" />
          <Picker.Item label="French" value="French" />
        </Picker>
      </View>
      <Text style={{ marginBottom: 4 }}>Temperature Unit</Text>
      <View
        style={{
          backgroundColor: "#f5f6fa",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={unit}
          onValueChange={setUnit}
          style={{ height: 54, paddingHorizontal: 12, fontSize: 18 }}
          itemStyle={{ fontSize: 18, paddingVertical: 8 }}
        >
          <Picker.Item label="Celsius (°C)" value="Celsius (°C)" />
          <Picker.Item label="Fahrenheit (°F)" value="Fahrenheit (°F)" />
        </Picker>
      </View>
    </View>
  );
}
