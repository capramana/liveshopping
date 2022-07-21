import React from "react";
import {View, Text, StyleSheet} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const QuantityButton = ({ quantity }) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.plusMinus}>–</Text>
            </View>
            <View>
                <Text style={styles.quantity}>{quantity}</Text>
            </View>
            <View>
                <Text style={styles.plusMinus}>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: wp(10),
        width: wp(23),
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#4A4A4A",
        shadowRadius: 6,
        shadowOpacity: 0.65,
        alignItems: "center",
    },
    plusMinus: {
        fontWeight: "bold",
        fontSize: wp(5),
        color: "#7B6ECC",
    },
    quantity: {
        fontSize: wp(5),
        color: "black",
        alignItems: "center",
    }
})

export default QuantityButton