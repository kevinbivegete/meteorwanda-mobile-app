import React from "react";
import { View } from "react-native";
import SeasonCard from "./SeasonCard";

const seasons = [
  {
    name: "Season A 2025",
    period: "Planting: September - November",
    color: "#e3edff",
  },
  {
    name: "Season B 2025",
    period: "Planting: February - April",
    color: "#e3ffe7",
  },
];

export default function SeasonalCalendar() {
  return (
    <View style={{ marginVertical: 8 }}>
      {seasons.map((item, idx) => (
        <SeasonCard key={idx} {...item} />
      ))}
    </View>
  );
}
