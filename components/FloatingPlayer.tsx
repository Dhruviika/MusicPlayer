import {
  StyleSheet,
  Text,
  View,
  ViewProps,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Track, useActiveTrack } from "react-native-track-player";
import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "@/constants/images";
import { defaultStyles } from "@/styles";
import { PlayPauseButton, SkipToNextButton } from "./PlayerControls";
import { useLastActiveTrack } from "hooks/useLastActiveTrack";
import { MovingText } from "./MovingText";

const FloatingPlayer = ({ style }: ViewProps) => {
  const activeTrack = useActiveTrack();
  const lastActiveTrack = useLastActiveTrack();

  const displayedTrack: Track = activeTrack ?? lastActiveTrack;

  if (!displayedTrack) return null;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <>
        <FastImage
          source={{
            uri: displayedTrack.artwork ?? unknownTrackImageUri,
          }}
          style={styles.trackArtworkImage}
        />
        <View style={styles.trackTitleContainer}>
          <MovingText
            style={styles.trackTitle}
            text={displayedTrack.title ?? ""}
            animationThreshold={25}
          />
        </View>
        <View style={styles.trackControlsContainer}>
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={24} />
        </View>
      </>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  trackArtworkImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  trackTitle: {
    ...defaultStyles.text,
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 8,
    borderRadius: 12,
    paddingVertical: 10,
    position: "absolute",
    bottom: 75,
    marginHorizontal: 8,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: "hidden",
    marginLeft: 10,
  },
  trackControlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginRight: 16,
    paddingLeft: 16,
  },
});
