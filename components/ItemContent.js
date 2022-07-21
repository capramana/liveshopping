import React from "react";
import {View, Text, StyleSheet} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import QuantityButton from "../components/QuantityButton"

const ItemContent = ({ title, brand, itemDesc, price, quantity }) => {
    return(
        <View style={styles.contentSize}>
            <View style={styles.itemContent}>
                <View style={styles.picture}/>
                <View style={styles.textContent}>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                        <Text style={styles.brand}>{brand}</Text>
                        <View style={styles.descSize}>
                            <Text>{itemDesc}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.priceAndQuantity}>
                <Text style={styles.price}>${price}</Text>
                <QuantityButton quantity={quantity}>
                    {quantity}
                </QuantityButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    contentSize: {
        marginTop: wp(8),
    },
    itemContent: {
        display: "flex",
        flexDirection: "row",
    },
    picture: {
        height: hp(11),
        width: hp(11),
        borderRadius: 10,
        backgroundColor: "black",
    },
    textContent: {
        marginLeft: wp(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        fontSize: wp(5),
    },
    brand: {
        fontWeight: "bold",
    },
    descSize: {
        width: wp(60),
    },
    priceAndQuantity: {
        width: wp(90),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: wp(2),
    },
    price: {
        fontSize: wp(5),
    },
})

export default ItemContent