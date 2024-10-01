import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@/constants/token";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const primaryColor = colors.primary;
  const greyColor = "#737373";

  const icons = {
    "(songs)": (props: any) => (
      <Ionicons
        name="musical-notes-sharp"
        size={26}
        color={greyColor}
        {...props}
      />
    ),
    favorites: (props: any) => (
      <FontAwesome name="heart" size={26} color={greyColor} {...props} />
    ),
    playlists: (props: any) => (
      <MaterialCommunityIcons
        name="playlist-play"
        size={26}
        color={greyColor}
        {...props}
      />
    ),
    artists: (props: any) => (
      <FontAwesome6 name="users-line" size={26} color={greyColor} {...props} />
    ),
  };

  const routeLabels = {
    "(songs)": "Songs",
    favorites: "Favorites",
    playlists: "Playlists",
    artists: "Artists",
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label = routeLabels[route.name];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({
              color: isFocused ? primaryColor : greyColor,
            })}
            <Text
              style={{
                color: isFocused ? primaryColor : greyColor,
                fontSize: 11,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    // marginHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
