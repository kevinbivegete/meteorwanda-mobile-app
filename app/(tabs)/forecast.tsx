import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/HeaderBar";
import ForecastList from "../../components/ForecastList";

export default function ForecastScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f6fa" }}>
      <ScrollView>
        <HeaderBar />
        <View
          style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 4 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            7-Day Forecast
          </Text>
        </View>
        <ForecastList />
      </ScrollView>
    </SafeAreaView>
  );
}
