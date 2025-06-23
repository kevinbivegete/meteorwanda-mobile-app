import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/HeaderBar";
import ProvinceSelector from "../../components/ProvinceSelector";
import WeatherCard from "../../components/WeatherCard";
import InfoCard from "../../components/InfoCard";
import AlertsList from "../../components/AlertsList";
import RightDrawerMenu from "../../components/RightDrawerMenu";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [province, setProvince] = useState("Kigali City");
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f6fa" }}>
      <RightDrawerMenu
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        onNavigate={(route) => {
          setDrawerVisible(false);
          router.navigate(route as any);
        }}
      />
      <ScrollView>
        <HeaderBar />
        <ProvinceSelector value={province} onValueChange={setProvince} />
        <WeatherCard />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 16,
            marginBottom: 8,
          }}
        >
          <InfoCard label="UV Index" value="6" />
          <InfoCard label="Visibility" value="10km" />
        </View>
        <AlertsList />
      </ScrollView>
    </SafeAreaView>
  );
}
