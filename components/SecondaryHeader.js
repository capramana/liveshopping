import React from "react";
import {View, Text, StyleSheet} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackICN from "../icons/arrow-ios-back-outline.svg"

const SecondaryHeader = ({ title }) => {
    return(
        <View style={styles.content}>
            <BackICN
                height = {hp(5)}
                width = {hp(5)}
                fill = "black"
            />
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.invisSquare}/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: wp(5),
    },
    backSquare: {
        height: hp(5),
        width: hp(5),
        backgroundColor: "black",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: wp(6),
        display: "flex",
        color: "black",
    },
    invisSquare: {
        height: hp(5),
        width: hp(5),
        backgroundColor: "white",
    }
})

export default SecondaryHeader;