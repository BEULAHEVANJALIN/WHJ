import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

export default class StoryCard extends Component {

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/story_image_1.png")}
              style={styles.storyImage}>
            </Image>
            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.story.title}
              </Text>
              <Text style={styles.storyAuthorText}>
                {this.props.story.author}
              </Text>
              <Text style={styles.descriptionText}>
                {this.props.story.description}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10
  },
  storyImage: {
    resizeMode: "contain",
    width: "90%",
    alignSelf: "center",
    height: 200
  },
  titleContainer: {
    justifyContent: "center",
    top:-15,
    padding: 10
  },
  storyTitleText: {
    fontSize: 25,
  },
  storyAuthorText: {
    fontSize: 17,
  },
  descriptionText: {
    fontSize: 13
  }
});
