import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Viewership from "../components/Viewership";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CloseICN from "../icons/close-outline.svg"

const LiveHeader = ({ displayName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.userCircle}/>
        <View style={styles.userNameAndViewership}>
          <Text style={styles.userName}>{displayName}</Text>
          <Viewership/>
        </View>
      </View>
      <View style={styles.lhs}>
        <View style={styles.liveStudio}>
          <Text>LIVE</Text>
        </View>
        <CloseICN
          height = {hp(5)}
          width = {hp(5)}
          fill = "black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: wp(5),
    alignItems: "center",
  },
  userCircle: {
    height: hp(5),
    width: hp(5),
    borderRadius: 100,
    backgroundColor: "gray",
  },
  userDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userNameAndViewership: {
    paddingLeft: wp(3),
  },
  userName: {
    fontSize: wp(5),
  },
  lhs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  liveStudio: {
    height: hp(3.5),
    width: hp(5),
    backgroundColor: "red",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
});

export default LiveHeader;
