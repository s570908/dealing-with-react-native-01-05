import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  console.log('로그가 어디에 보이나요?');
  return (
    <SafeAreaView>
      <View>
        <Text>Hello React! 나와봐요.</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
