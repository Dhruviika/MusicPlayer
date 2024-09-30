import { colors, fontSize } from "@/constants/token";
import TabBar from "components/TabBar";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

const TabsNavigation = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="playlists" />
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen name="artists" />
    </Tabs>
  );
};

export default TabsNavigation;
