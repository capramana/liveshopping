import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const UpcomingEventHeader = () => {
    return(
        <View>
            <Text>Today - 9:30 AM</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    headerBox: {
        height: hp(2), 
        width: hp(4),
        borderRadius: 100,
        alignItems: "center",
    }
})

export default UpcomingEventHeader