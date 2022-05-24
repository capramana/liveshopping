import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const Header = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.user}>Patricia</Text> {/*Display name*/}
            </View>
            <View style={styles.userIcon} /> {/*User ICN*/}
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        height: hp(13),
        width: wp(100),
        backgroundColor: "white",
        borderBottomRightRadius: wp(6),
        borderBottomLeftRadius: wp(6),
        shadowColor: "#4A4A4A",
        shadowRadius: 25,
        shadowOpacity: 0.65,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: wp(5),
    },
    userIcon: {
        width: wp(10),
        height: wp(10),
        backgroundColor: "black",
        borderRadius: "100%",
    },
    welcome: {
        fontSize: wp(4.5),
    },
    user: {
        fontSize: wp(6.5),
    }
})

export default Header