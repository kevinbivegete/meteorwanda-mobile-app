import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

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
        }}
      >
        <Picker
          selectedValue={language}
          onValueChange={setLanguage}
          style={{ height: 40, ...pickerStyle }}
          itemStyle={pickerStyle}
        >
          <Picker.Item label="English" value="English" style={pickerStyle} />
          <Picker.Item
            label="Kinyarwanda"
            value="Kinyarwanda"
            style={pickerStyle}
          />
          <Picker.Item label="French" value="French" style={pickerStyle} />
        </Picker>
      </View>
      <Text style={{ marginBottom: 4 }}>Temperature Unit</Text>
      <View style={{ backgroundColor: "#f5f6fa", borderRadius: 8 }}>
        <Picker
          selectedValue={unit}
          onValueChange={setUnit}
          style={{ height: 40, ...pickerStyle }}
          itemStyle={pickerStyle}
        >
          <Picker.Item
            label="Celsius (°C)"
            value="Celsius (°C)"
            style={pickerStyle}
          />
          <Picker.Item
            label="Fahrenheit (°F)"
            value="Fahrenheit (°F)"
            style={pickerStyle}
          />
        </Picker>
      </View>
    </View>
  );
}
