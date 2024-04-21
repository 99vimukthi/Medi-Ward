// Card.js
import React from 'react';
//import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, content,imageSource }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
      {/*<Image>{imageSource}</Image>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Card;
