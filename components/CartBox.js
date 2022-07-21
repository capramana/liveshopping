import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CartICN from "../icons/shopping-bag-outline.svg"

const CartBox = ({ quantity }) => {
    return(
        <View>
            <View style={styles.shoppingBox}>
                <CartICN
                    height = {hp(3.5)}
                    width = {hp(3.5)}
                    fill = "black"
                />
                <Text style={styles.quantity}>{quantity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    shoppingBox:{
        height: "auto",
        width: hp(8),
        backgroundColor: "gray",
        opacity: "50",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: wp(1.5),
        paddingRight: wp(3),
        borderRadius: 4,
    },
    quantity: {
        fontSize: wp(4.5),
        color: "white",
    },
})

export default CartBox