import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LiveBox = () => {
    return (
        <View style={styles.box}>
            <View>
                <View>
                    <View style={styles.userCircle}/>
                    <Text>jessicalee</Text>
                </View>
                <Text>Beauty 101: Achieving the best on a budget</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    box: {
        backgroundColor: "black",
        marginRight: wp(4),
        height: hp(30),
        width: wp(40),
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    liveEvent: {
        display: "flex",
        flexDirection: "row",
        padding: wp(2),
    },
    userCircle: {
        height: hp(3),
        width: hp(3),
        borderRadius: 100,
    },
})

export default LiveBox