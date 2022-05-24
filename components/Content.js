import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Content = ({ children }) => {
    return(
        <View style={styles.LPad}>{children}</View>
    )
}

const styles = StyleSheet.create ({
    LPad: {
        paddingLeft: wp(5),
    },
})

export default Content