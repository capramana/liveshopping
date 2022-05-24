import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Categories = ({ children, categoryTitle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}/>
            <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        </View>
    )
}

const styles=StyleSheet.create ({
    container: {
        display: "flex",
        alignItems: "center",
        marginRight: wp(4),
    },
    circle: {
        backgroundColor: "black",
        height: hp(11),
        width: hp(11),
        borderRadius: 100,
    },
    categoryTitle: {
        fontSize: wp(4),
        paddingTop: wp(4),
    },
})

export default Categories