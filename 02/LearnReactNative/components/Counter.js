import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Counter({count, onIncrease, onDecrease}) {
  const onIncreaseHandler = () => {
    const name = '홍길동';
    return onIncrease(name);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={onIncreaseHandler} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;
