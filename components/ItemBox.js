import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ItemBox = ({ itemTitle, desc }) => {
    return(
        <View style={styles.container}>
            <View style={styles.picture}/>
            <View>
                <Text style={styles.title}>
                    {itemTitle}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.desc}>
                    {desc}
                </Text>
            </View>
        </View>
    )
}

const ScrollableItemBox = ({ children }) => {
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        height: hp(16),
        width: hp(12),
        borderRadius: 10,
        padding: hp(0.75),
        backgroundColor: "gray",
        alignItems:"center",
        marginRight: wp(4),
    },
    picture: {
        height: hp(10),
        width: hp(10),
        borderRadius: 8,
        backgroundColor: "black",
    },
    title: {
        marginTop: hp(0.5),
        fontWeight: "bold",
        color: "black",
    },
    desc:{
        color: "black",
    }
})

export { ItemBox, ScrollableItemBox }