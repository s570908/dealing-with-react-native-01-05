// @ts-nocheck
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        source={{uri: 'https://via.placeholder.com/150'}}
        style={styles.image}
        resizeMode="stretch"
      />
      <Text style={styles.description}>야호! 할일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
    backgroundColor: 'gray',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
