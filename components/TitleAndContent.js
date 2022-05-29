import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TitleAndContent = ({ children, title }) => {
    return(
        <View style={styles.content}>
            <Text style={styles.text}>{title}</Text>
            {children}
            {/*children = content component*/}
        </View>
    )
}

const ScrollableTitleAndContent = ({ children, title }) => {
    return(
        <TitleAndContent title={title}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {children}      
        </ScrollView>
        </TitleAndContent>
    )
}

const styles = StyleSheet.create ({
    content: {
        marginTop: hp(3),
    },
    text: {
        paddingBottom: 12,
        fontSize: wp(5),
    },
})

export {TitleAndContent, ScrollableTitleAndContent}