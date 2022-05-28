import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Viewership = () => {
    return(
        <View>
            <Image 
                source={require("../icons/eye-outline.svg")}
            />
            <Text>1.4k</Text>
        </View>
    )
}

export default Viewership