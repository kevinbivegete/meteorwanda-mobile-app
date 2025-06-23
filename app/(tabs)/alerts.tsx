import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/HeaderBar";
import AlertsList from "../../components/AlertsList";
import AlertSettingsCard from "../../components/AlertSettingsCard";

export default function AlertsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f6fa" }}>
      <ScrollView>
        <HeaderBar />
        <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, flex: 1 }}>
              Weather Alerts
            </Text>
            <View
              style={{
                backgroundColor: "#ffb3b3",
                borderRadius: 12,
                paddingHorizontal: 10,
                paddingVertical: 2,
              }}
            >
              <Text
                style={{ color: "#d32f2f", fontWeight: "bold", fontSize: 14 }}
              >
                2 Active
              </Text>
            </View>
          </View>
          <AlertsList />
          <AlertSettingsCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
