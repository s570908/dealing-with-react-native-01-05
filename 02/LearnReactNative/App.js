import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Box from './components/Box';

import Counter from './components/Counter';
import Greeting from './components/Greeting';

import tailwind from 'tailwind-rn-lts';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  const [count, setCount] = useState(0);

  const onIncrease = name => {
    console.log('Children made ', name);
    setCount(count + 1);
  };
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={tailwind('flex-1 bg-blue-200')}>
      <Button title="Box 보이기 토글" onPress={onPress} />
      <View>
        {visible && (
          <Box
            rounded={true}
            size="large"
            color="red"
            style={tailwind('mx-10 my-40')}
          />
        )}
      </View>
      <Text style={tailwind('text-blue-800 text-lg font-semibold bg-red-300')}>
        Hello Tailwind
      </Text>
      <Greeting name="Trumph" />
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
