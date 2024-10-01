import { View, Text, FlatList, FlatListProps } from "react-native";
import React from "react";
import library from "@/assets/data/library.json";
import TrackListItem from "./TrackListItem";
import { utilsStyles } from "@/styles";
import TrackPlayer, { Track } from "react-native-track-player";
import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "@/constants/images";

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
  const handleTrackSelect = async (track: Track) => {
    await TrackPlayer.load(track);
    await TrackPlayer.play();
  };
  return (
    <FlatList
      data={tracks}
      ListEmptyComponent={
        <View>
          <Text style={utilsStyles.emptyContentText}>No songs found</Text>

          <FastImage
            source={{
              uri: unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={utilsStyles.emptyContentImage}
          />
        </View>
      }
      contentContainerStyle={{ paddingTop: 15, paddingBottom: 130 }}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem track={track} onTrackSelect={handleTrackSelect} />
      )}
      {...flatlistProps}
    />
  );
}
