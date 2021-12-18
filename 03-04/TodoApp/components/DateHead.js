import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{formatted}</Text>
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
