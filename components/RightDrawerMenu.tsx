import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";

type RightDrawerMenuProps = {
  visible: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
};

export default function RightDrawerMenu({
  visible,
  onClose,
  onNavigate,
}: RightDrawerMenuProps) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={{ flex: 1 }} onPress={onClose} activeOpacity={1}>
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 260,
            backgroundColor: "#fff",
            padding: 24,
            elevation: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Menu</Text>
            <Feather name="x" size={28} onPress={onClose} />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
            onPress={() => onNavigate("home")}
          >
            <MaterialIcons name="home" size={24} style={{ marginRight: 16 }} />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
            onPress={() => onNavigate("forecast")}
          >
            <Feather name="bar-chart-2" size={24} style={{ marginRight: 16 }} />
            <Text>Forecast</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
            onPress={() => onNavigate("agriculture")}
          >
            <Feather name="activity" size={24} style={{ marginRight: 16 }} />
            <Text>Agriculture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
            onPress={() => onNavigate("alerts")}
          >
            <FontAwesome name="bell" size={24} style={{ marginRight: 16 }} />
            <Text>Alerts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
            onPress={() => onNavigate("settings")}
          >
            <Feather name="settings" size={24} style={{ marginRight: 16 }} />
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
