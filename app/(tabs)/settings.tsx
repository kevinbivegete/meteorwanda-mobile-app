import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/HeaderBar";
import ProfileCard from "../../components/ProfileCard";
import AppSettingsCard from "../../components/AppSettingsCard";
import PreferencesCard from "../../components/PreferencesCard";
import AboutCard from "../../components/AboutCard";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f6fa" }}>
      <ScrollView>
        <HeaderBar />
        <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
            Settings
          </Text>
          <ProfileCard />
          <AppSettingsCard />
          <PreferencesCard />
          <AboutCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
