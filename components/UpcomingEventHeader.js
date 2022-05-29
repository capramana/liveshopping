import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const UpcomingEventHeader = () => {
    return(
        <View style={styles.headerBox}>
            <Text style={styles.schedule}>Today - 9:30 AM</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    headerBox: {
        height: hp(2), 
        width: "auto",
        padding: wp(3),
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
    },
    schedule: {
        color: "white",
        display: "flex",
        alignItems: "center",
        fontSize: wp(3),
    },
})

export default UpcomingEventHeader