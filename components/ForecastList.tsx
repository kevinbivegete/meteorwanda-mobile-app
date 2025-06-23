import React from "react";
import { View } from "react-native";
import ForecastDayCard from "./ForecastDayCard";

const forecastData = [
  {
    day: "Today",
    date: "Jun 16",
    description: "Partly Cloudy",
    chanceOfRain: "20% chance of rain",
    temperature: "24°",
  },
  {
    day: "Mon",
    date: "Jun 17",
    description: "Rainy",
    chanceOfRain: "80% chance of rain",
    temperature: "22°",
  },
  {
    day: "Tue",
    date: "Jun 18",
    description: "Sunny",
    chanceOfRain: "10% chance of rain",
    temperature: "25°",
  },
  {
    day: "Wed",
    date: "Jun 19",
    description: "Cloudy",
    chanceOfRain: "30% chance of rain",
    temperature: "23°",
  },
  {
    day: "Thu",
    date: "Jun 20",
    description: "Rainy",
    chanceOfRain: "70% chance of rain",
    temperature: "21°",
  },
  {
    day: "Fri",
    date: "Jun 21",
    description: "Sunny",
    chanceOfRain: "5% chance of rain",
    temperature: "26°",
  },
  {
    day: "Sat",
    date: "Jun 22",
    description: "Partly Cloudy",
    chanceOfRain: "25% chance of rain",
    temperature: "24°",
  },
];

export default function ForecastList() {
  return (
    <View style={{ margin: 16 }}>
      {forecastData.map((item, idx) => (
        <ForecastDayCard key={idx} {...item} />
      ))}
    </View>
  );
}
