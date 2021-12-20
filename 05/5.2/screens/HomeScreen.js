import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
    </View>
  );
}

export default HomeScreen;

// route라는 Props
// {
//   "key": "Detail-vgDx8-H-8e7oao6a3xJz7",
//   "name": "Detail",
//   "params": {"id": 1}
// }
