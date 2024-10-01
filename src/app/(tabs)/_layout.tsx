import { colors, fontSize } from "@/constants/token";
import FloatingPlayer from "components/FloatingPlayer";
import TabBar from "components/TabBar";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabsNavigation = () => {
  return (
    <Tabs
      tabBar={(props) => (
        <View>
          <FloatingPlayer />
          <TabBar {...props} />
        </View>
      )}
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
