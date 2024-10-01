import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { screenPadding } from "@/constants/token";

type searchProps = {
  search: string;
  setSearch: (text: string) => void;
};
const SearchBar = ({ search, setSearch }: searchProps) => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={22} color="#757477" />
      <TextInput
        style={styles.searchInput}
        placeholder="Find in songs"
        placeholderTextColor="#757477"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#1A1A1D",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 7,
    marginHorizontal: screenPadding.horizontal,
    borderRadius: 10,
  },
  searchInput: {
    fontSize: 16,
    color: "white",
  },
});
