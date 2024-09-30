import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: top + 70,
        backgroundColor: "transparent",
        ...styles.header,
      }}
    >
      <Text style={styles.heading}>Songs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomHeader;
