import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DateHead() {
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>2021년 5월 3일</Text>
    </View>
  );
}

// 색상 코드를 정할 때는 Material Color(https://material.io/resources/color)를 주로 참조했습니다.
const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#ffc4ff',
  },
  dateText: {
    fontSize: 24,
    color: 'black',
  },
});

export default DateHead;
