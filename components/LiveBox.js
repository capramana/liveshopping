import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LiveNow = ({ chldren, title, displayName }) => {
    <View style={styles.box}>
        {children}
        <View>
            <View>
                <View style={styles.userCircle}/>
                <Text>{displayName}</Text>
            </View>
            <View>
                <Text>{title}</Text>
            </View>
        </View>
    </View>
}

const style = StyleSheet.create ({
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