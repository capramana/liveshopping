import React from "react";
import { View, StyleSheet } from "react-native";
import Viewership from "../components/Viewership";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LiveHeader = ({ displayName }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.userCircle} />
        <View>
          <Text>{displayName}</Text>
          <Viewership/>
        </View>
      </View>
      <View>
        <View style={styles.liveStudio}>
          <Text>LIVE</Text>
        </View>
          <Image source={require("../icons/close-outline.svg")} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userCircle: {
    height: hp(3),
    width: hp(3),
    borderRadius: 100,
  },
  liveStudio: {
    height: hp(3),
    width: hp(5),
  },
});

export default LiveHeader;
