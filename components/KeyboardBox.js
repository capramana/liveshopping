import React from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const KeyboardBox = () => {
    return (
        <View>
            <View style={styles.keyboardBox}>
                <TextInput placeholder="Say hello..." placeholderTextColor={"white"} style={styles.input}/>
                <View style={styles.circle}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    keyboardBox: {
        height: hp(5.5),
        width: "95%",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        opacity: 30,
        borderRadius: 100,
        paddingLeft: wp(4),
        padding: wp(2),
        marginTop: wp(4),
        alignItems: "center",
    },
    circle: {
        height: hp(4),
        width: hp(4),
        borderRadius: 100,
        backgroundColor: "white",
    },
    input: {
        height: "auto",
        width: "85%",
        color: "white",
    },
})

export default KeyboardBox