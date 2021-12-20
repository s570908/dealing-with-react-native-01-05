import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailScreen({route}) {
  // route라는 Props도 받아옵니다. 이 Props는 객체 타입
  // {
  //   "key": "Detail-vgDx8-H-8e7oao6a3xJz7",
  //   "name": "Detail", 
  //   "params": {"id": 1}
  // }
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;
