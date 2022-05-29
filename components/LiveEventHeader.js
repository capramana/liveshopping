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
                <Text style={styles.liveText}>Live</Text>
            </View>
            <Viewership/>
        </View>
    )
}

const styles = StyleSheet.create ({
    liveCircle: {
        backgroundColor: "white",
        height: hp(0.5),
        width: hp(0.5),
        borderRadius: 100,
    },
    liveBox: {
        backgroundColor: "#FF3232",
        height: hp(2.5),
        width: "auto",
        padding: wp(2),
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    liveHeader: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    liveText: {
        fontSize: wp(3),
        color: "white",
        paddingLeft: wp(2),
    },
})

export default LiveEventHeader