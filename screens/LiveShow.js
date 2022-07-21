import React from "react";
import LiveHeader from "../components/LiveHeader";
import Content from "../components/Content";
import CartBox from "../components/CartBox";
import KeyboardBox from "../components/KeyboardBox";
import { ItemBox, ScrollableItemBox } from "../components/ItemBox";
import {View, Text, StyleSheet} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LiveShow = () => {
    return(
        <View style={styles.contentSpacing}>
            <View>
                <LiveHeader displayName="jessicalee"/>
                <Content>
                    <CartBox quantity="2"/>
                </Content>
            </View>
            <View style={styles.engagement}>
                <Content>
                    <ScrollableItemBox>
                        <ItemBox itemTitle="Glossier" desc="Lash Stick, black (10 oz) with"/>
                        <ItemBox itemTitle="Glossier" desc="Ultralip in Lucite (10 oz)"/>
                        <ItemBox itemTitle="Laura Geller" desc="Foundation (10 oz)"/>
                        <ItemBox itemTitle="Glossier" desc="Lash Stick, black (10 oz) with"/>
                    </ScrollableItemBox>
                    <KeyboardBox/>
                </Content>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    contentSpacing: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    engagement: {
        height: hp(80),
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    }
})

export default LiveShow;