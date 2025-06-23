import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/HeaderBar";
import FarmingConditionsCard from "../../components/FarmingConditionsCard";
import RecommendationsList from "../../components/RecommendationsList";
import SeasonalCalendar from "../../components/SeasonalCalendar";

export default function AgricultureScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f6fa" }}>
      <ScrollView>
        <HeaderBar />
        <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
            Agricultural Intelligence
          </Text>
          <FarmingConditionsCard />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 16,
              marginBottom: 8,
            }}
          >
            Agricultural Recommendations
          </Text>
          <RecommendationsList />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 16,
              marginBottom: 8,
            }}
          >
            Seasonal Calendar
          </Text>
          <SeasonalCalendar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
