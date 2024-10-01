import { View, Text, FlatList, FlatListProps } from "react-native";
import React from "react";
import library from "@/assets/data/library.json";
import TrackListItem from "./TrackListItem";
import { utilsStyles } from "@/styles";
import { Track } from "react-native-track-player";

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

export default function TracksList({
  tracks,
  ...flatlistProps
}: TracksListProps) {
  const handleTrackSelect = (track: Track) => {
    console.log("Selected track", track);
  };
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 15, paddingBottom: 130 }}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem track={track} onTrackSelect={handleTrackSelect} />
      )}
      {...flatlistProps}
    />
  );
}
