import React from "react";
import Viewership from "../components/Viewership";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LiveEventHeader = () => {
    return (
        <View style={styles.liveHeader}>
            <View style={styles.liveBox}>
                <View style={styles.liveCircle}/>
                <Text>Live</Text>
            </View>
            <Viewership/>
        </View>
    )
}

const styles = StyleSheet.create ({
    liveCircle: {
        backgroundColor: "black",
        height: hp(1),
        width: hp(1),
        borderRadius: 100,
    },
    liveBox: {
        backgroundColor: "#FF3232",
        height: hp(3),
        width: "auto",
        padding: wp(2),
        borderRadius: 100,
    },
    liveHeader: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
})

export default LiveEventHeader