import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";

type ProvinceSelectorProps = {
  value: string;
  onValueChange: (province: string) => void;
};

export default function ProvinceSelector({
  value,
  onValueChange,
}: ProvinceSelectorProps) {
  return (
    <View style={{ margin: 16 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
      >
        <Text style={{ fontWeight: "500", flex: 1 }}>Select Province</Text>
        <Feather name="map-pin" size={16} color="#1976d2" />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#eee",
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={value}
          onValueChange={onValueChange}
          style={{ height: 54, paddingHorizontal: 12, fontSize: 18 }}
          itemStyle={{ fontSize: 18, paddingVertical: 8 }}
        >
          <Picker.Item label="Kigali City" value="Kigali City" />
          <Picker.Item label="Northern Province" value="Northern Province" />
          <Picker.Item label="Southern Province" value="Southern Province" />
          <Picker.Item label="East Province" value="East Province" />
          <Picker.Item label="West Province" value="West Province" />
        </Picker>
      </View>
    </View>
  );
}
