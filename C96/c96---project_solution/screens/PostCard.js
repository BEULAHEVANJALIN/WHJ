import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}>
                {this.props.post.author}
            </Text>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>
                {this.props.post.caption}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  authorNameContainer: {
    flex: 0.85,
    justifyContent: 'center',
  },
  authorNameText: {
    fontSize: 20
  },
  postImage: {
    marginTop: 10,
    resizeMode: 'contain',
    width: '100%',
    alignSelf: 'center',
    height: 275,
  },
  captionText: {
    paddingTop: 10,
  }
});
