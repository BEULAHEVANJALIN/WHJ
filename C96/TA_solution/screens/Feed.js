
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import StoryCard from "./StoryCard";
import { FlatList } from "react-native-gesture-handler";

let stories = require("./temp_stories.json");

export default class Feed extends Component {

  renderItem = ({ item: story }) => {
    return <StoryCard story={story} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <Text style={styles.appTitleText}>Storytelling App</Text>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
  },
  appTitle: {
    flex: 0.07,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: 28,
  },
  cardContainer: {
    flex: 0.93
  }
});
