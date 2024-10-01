import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "@/constants/images";
import { defaultStyles } from "@/styles";
import { colors, fontSize } from "@/constants/token";
import { Track, useActiveTrack, useIsPlaying } from "react-native-track-player";
import { Entypo, Ionicons } from "@expo/vector-icons";
import LoaderKit from "react-native-loader-kit";

export type TrackListItemProps = {
  track: Track;
  onTrackSelect: (track: Track) => void;
};

const TrackListItem = ({ track, onTrackSelect }: TrackListItemProps) => {
  const { playing } = useIsPlaying();
  const isActiveTrack = useActiveTrack()?.url === track.url;
  return (
    <TouchableHighlight onPress={() => onTrackSelect(track)}>
      <View style={styles.trackItemContainer}>
        <View>
          <FastImage
            source={{
              uri: track.artwork ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />

          {isActiveTrack &&
            (playing ? (
              <LoaderKit
                style={styles.trackPlayingIconIndicator}
                name="LineScaleParty"
                color={colors.icon}
              />
            ) : (
              <Ionicons
                style={styles.trackPausedIndicator}
                name="play"
                size={24}
                color={colors.icon}
              />
            ))}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ width: "100%" }}>
            <Text
              style={{
                ...styles.trackTitle,
                color: isActiveTrack ? colors.primary : colors.text,
              }}
            >
              {track.title}
            </Text>

            {track.artist && (
              <Text style={styles.trackArtist}>{track.artist}</Text>
            )}
          </View>
          <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TrackListItem;

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
    paddingRight: 20,
  },
  trackArtworkImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  trackTitle: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: "600",
    maxWidth: "90%",
  },
  trackArtist: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
  trackPlayingIconIndicator: {
    position: "absolute",
    top: 18,
    left: 16,
    width: 16,
    height: 16,
  },
  trackPausedIndicator: {
    position: "absolute",
    top: 14,
    left: 14,
  },
});
