// import React, {useEffect} from 'react';
// import {View, Button} from 'react-native';

// function HomeScreen({navigation}) {
//   useEffect(() => {
//     navigation.setOptions({title: '홈'});
//   }, [navigation]);

//   return (
//     <View>
//       <Button
//         title="Detail 1 열기"
//         onPress={() => navigation.push('Detail', {id: 1})}
//       />
//       <Button
//         title="Detail 2 열기"
//         onPress={() => navigation.push('Detail', {id: 2})}
//       />
//       <Button
//         title="Detail 3 열기"
//         onPress={() => navigation.push('Detail', {id: 3})}
//       />
//       <Button
//         title="Headerless 열기"
//         onPress={() => navigation.push('Headerless')}
//       />
//     </View>
//   );
// }

// export default HomeScreen;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Button, Text} from 'react-native';

function OpenDetailButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
}

export default HomeScreen;
