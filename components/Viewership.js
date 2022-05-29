import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Viewership = () => {
    return(
        <View style={styles.viewCount}>
            <View style={styles.box}/>
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