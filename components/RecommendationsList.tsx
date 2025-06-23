import React from "react";
import { View } from "react-native";
import RecommendationCard from "./RecommendationCard";

const recommendations = [
  {
    title: "Irrigation Recommendation",
    description:
      "Current soil moisture is adequate. No irrigation needed for next 48 hours.",
  },
  {
    title: "Planting Alert",
    description:
      "Favorable conditions for bean planting in Eastern Province this week.",
  },
  {
    title: "Harvest Warning",
    description:
      "Heavy rains predicted. Consider early harvest for mature crops.",
  },
];

export default function RecommendationsList() {
  return (
    <View style={{ marginVertical: 8 }}>
      {recommendations.map((item, idx) => (
        <RecommendationCard key={idx} {...item} />
      ))}
    </View>
  );
}
