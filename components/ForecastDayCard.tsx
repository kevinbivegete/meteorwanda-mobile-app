import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ForecastDayCardProps = {
  day: string;
  date: string;
  icon?: React.ReactNode;
  description: string;
  chanceOfRain: string;
  temperature: string;
};

function getWeatherIcon(description: string) {
  if (description.toLowerCase().includes("sunny")) {
    return (
      <MaterialIcons
        name="wb-sunny"
        size={32}
        color="#fbc02d"
        style={{ marginHorizontal: 8 }}
      />
    );
  }
  if (description.toLowerCase().includes("rain")) {
    return (
      <MaterialIcons
        name="cloud"
        size={32}
        color="#2196f3"
        style={{ marginHorizontal: 8 }}
      />
    );
  }
  if (description.toLowerCase().includes("cloud")) {
    return (
      <MaterialIcons
        name="cloud"
        size={32}
        color="#90a4ae"
        style={{ marginHorizontal: 8 }}
      />
    );
  }
  return (
    <MaterialIcons
      name="wb-cloudy"
      size={32}
      color="#90a4ae"
      style={{ marginHorizontal: 8 }}
    />
  );
}

export default function ForecastDayCard({
  day,
  date,
  icon,
  description,
  chanceOfRain,
  temperature,
}: ForecastDayCardProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{day}</Text>
        <Text style={{ color: "#888", fontSize: 12 }}>{date}</Text>
      </View>
      {/* Weather icon */}
      {getWeatherIcon(description)}
      <View style={{ flex: 2 }}>
        <Text style={{ fontWeight: "bold" }}>{description}</Text>
        <Text style={{ color: "#1976d2", fontSize: 12 }}>{chanceOfRain}</Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 8 }}>
        {temperature}
      </Text>
    </View>
  );
}
