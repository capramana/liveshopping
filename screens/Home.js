import React from "react";
import Content from "../components/Content"
import Header from "../components/Header"
import Categories from "../components/Categories";
import LiveBox from "../components/LiveBox";
import UpcomingShow from "../components/UpcomingShow";
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
                    <LiveBox userName="jessicalee" title="Beauty 101: Achieving the best on a budget!"/>
                    <LiveBox userName="thomasin" title="Fundamentals of facial care"/>
                    <LiveBox userName="jeremystyles" title="Live a little with Jeremy Styles"/>
                </ScrollableTitleAndContent>
                <ScrollableTitleAndContent title="Categories">
                    <Categories categoryTitle="Lip Stick"/>
                    <Categories categoryTitle="Lip Stick"/>
                    <Categories categoryTitle="Lip Stick"/>
                    <Categories categoryTitle="Lip Stick"/>
                </ScrollableTitleAndContent>
                <TitleAndContent title="Coming Soon">
                    <UpcomingShow userName="justinewathers" title="Let's talk about skincare!"/>
                    <UpcomingShow userName="Glossier" title="New Glossier creams?!?!"/>
                </TitleAndContent>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({

})

export default Home