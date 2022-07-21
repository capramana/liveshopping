import React from "react";
import Content from "../components/Content";
import SecondaryHeader from "../components/SecondaryHeader";
import ItemContent from "../components/ItemContent";
import {View, Text, StyleSheet, ScrollView} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ShoppingCart = () => {
    return(
        <>
            <SecondaryHeader title={"Shopping Cart"}/>
            <Content>
                <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
                    <ItemContent title={"Ultralip in Lucite"} brand={"Glossier"} itemDesc={"A rich fuschia, 0.1 oz, hydrating shine + color"} price={"2.99"} quality={"3"}/>
                    <ItemContent title={"Everyday Black Mascara"} brand={"Glossier"} itemDesc={"0.29 oz, Natural looking and water resistant"} price={"14.99"} quality={"3"}/>
                    <ItemContent title={"Ultralip in Lucite"} brand={"Glossier"} itemDesc={"A rich fuschia, 0.1oz, hydrating shine + color"} price={"2.99"} quality={"3"}/>
                    <ItemContent title={"Ultralip in Lucite"} brand={"Glossier"} itemDesc={"A rich fuschia, 0.1oz, hydrating shine + color"} price={"2.99"} quality={"3"}/>
                    <ItemContent title={"Ultralip in Lucite"} brand={"Glossier"} itemDesc={"A rich fuschia, 0.1oz, hydrating shine + color"} price={"2.99"} quality={"3"}/>
                </ScrollView>
            </Content>
        </>
    )
}

export default ShoppingCart;