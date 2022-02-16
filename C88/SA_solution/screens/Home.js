import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Text style={styles.knowmore}>{"Know More --->"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Text style={styles.knowmore}>{"Know More --->"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Updates</Text>
                        <Text style={styles.knowmore}>{"Know More --->"}</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    }
});
