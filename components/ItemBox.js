import React from "react";
import {View, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ItemBox = ({ itemTitle }) => {
    return(
        <View>
            {/*Item Picture*/}
            <Text>{itemTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        height: hp(5),
        width: hp(3),
        borderRadius: 100,
        padding: wp(2),
    },
})

export default ItemBox