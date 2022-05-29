import React from "react";
import {View, Text, StyleSheet} from "react-native";
import UpcomingEventHeader from "./UpcomingEventHeader";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToDP,
} from "react-native-responsive-screen";

const UpcomingShow = ({ userName, title }) => {
    return (
        <View style={styles.box}>
            <UpcomingEventHeader/>
            <View>
                <View style={styles.user}>
                    <View style={styles.userCircle}/>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    box: {
        backgroundColor: "gray",
        marginRight: wp(4),
        height: hp(30),
        width: wp(40),
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: hp(1.5),
        borderRadius: 13,
    },
    liveEvent: {
        display: "flex",
        flexDirection: "row",
        padding: wp(2),
    },
    user: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: wp(24.5),
    },
    userName: {
        paddingLeft: wp(1.5),
    },
    userCircle: {
        backgroundColor: "white",
        height: hp(3),
        width: hp(3),
        borderRadius: 100,
    },
    title: {
        fontSize: wp(4.5),
        paddingTop: wp(1.5),
    }
})

export default UpcomingShow