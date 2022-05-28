import React from "react";
import Content from "../components/Content"
import Header from "../components/Header"
import Categories from "../components/Categories";
import LiveBox from "../components/LiveBox";
import LiveEventHeader from "../components/LiveEventHeader";
import UpcomingEventHeader from "../components/UpcomingEventHeader";
import {TitleAndContent, ScrollableTitleAndContent} from "../components/TitleAndContent";
import {View, StyleSheet} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
    return (
        <>
            <Header/>
            <Content>
                <ScrollableTitleAndContent title="Live Now!">
                    <LiveBox/>
                    <LiveBox/>
                    <LiveBox/>
                    <LiveBox/>
                </ScrollableTitleAndContent>
                <ScrollableTitleAndContent title="Categories">
                    <Categories categoryTitle="Lip Stick"/>
                    <Categories categoryTitle="Lip Stick"/>
                    <Categories categoryTitle="Lip Stick"/>
                    <Categories categoryTitle="Lip Stick"/>
                </ScrollableTitleAndContent>
                <TitleAndContent title="Coming Soon">
                    <LiveBox/>
                    <LiveBox/>
                </TitleAndContent>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        backgroundColor: "black",
        marginRight: wp(4),
        height: hp(30),
        width: wp(40),
    },
})

export default Home