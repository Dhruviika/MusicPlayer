import { screenPadding } from "@/constants/token";
import { defaultStyles } from "@/styles";
import SearchBar from "components/SearchBar";
import TracksList from "components/TracksList";
import { useMemo, useState } from "react";
import library from "@/assets/data/library.json";

import { View, Text, ScrollView } from "react-native";
import { trackTitleFilter } from "@/helpers/filter";

const SongsScreen = () => {
  const [search, setSearch] = useState("");

  const filteredSongs = useMemo(() => {
    if (!search) return library;

    return library.filter(trackTitleFilter(search));
  }, [search]);

  return (
    <View style={defaultStyles.container}>
      <SearchBar search={search} setSearch={setSearch} />
      <ScrollView style={{ paddingHorizontal: screenPadding.horizontal }}>
        <TracksList tracks={filteredSongs} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
