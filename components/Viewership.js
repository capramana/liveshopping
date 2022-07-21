import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ViewerICN from "../icons/eye-outline.svg"

const Viewership = () => {
    return(
        <View style={styles.viewCount}>
            <ViewerICN
                height = {hp(2)}
                width = {hp(2)}
                fill = "black"
            />
            <Text>1.4k</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    viewCount: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    box: {
        backgroundColor: "black",
        height: wp(3.5),
        width: wp(3.5),
        paddingRight: wp(3),
    },
})

export default Viewership