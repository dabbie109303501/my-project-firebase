import React, { useState } from 'react';
import {
  Button, Text, View, SafeAreaView, Image,
} from 'react-native';

import styles from '../Styles';

function First({ navigation }) {
  const [titleText, setTitleText] = useState('cutest~');
  const bodyText = 'Rilakkuma is the ';
  const text = 'Rilakkuma is a fictional character produced by the Japanese company San-X and created by Aki Kondo. ';
  const onPressTitle = () => {
    setTitleText(titleText === 'cutest~' ? 'most adorkable~' : 'cutest~');
  };
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container1}>
        <Image
          source={{ uri: 'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/09/178251294a7967399d7aebc4af2ed8a3-1.png' }}
          style={{ width: 334, height: 221, resizeMode: 'center' }}
        />
        <Text style={styles.titleText} onPress={onPressTitle}>
          {bodyText}
          {titleText}
        </Text>
        <View
          style={{
            height: 100,
            padding: 20,
          }}
        >
          <Text>{text}</Text>
        </View>
        <Button
          title="Vote"
          color="#ffd461"
          onPress={() => navigation.navigate('Vote')}
        />
        <Text>
          {'\n'}
          {'\n'}

        </Text>
      </View>
    </SafeAreaView>

  );
}
export default First;
