import React, { useState } from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button,
} from 'react-native';
import styles from '../Styles';

function Second({ navigation }) {
  const bodyText = 'Which one do you like the most?';
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const onPress1 = () => setCount1((prevCount) => prevCount + 1);
  const onPress2 = () => setCount2((prevCount) => prevCount + 1);
  const onPress3 = () => setCount3((prevCount) => prevCount + 1);
  const onPress4 = () => setCount4((prevCount) => prevCount + 1);

  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView>
        <View style={styles.container2}>
          <Image
            source={{ uri: 'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/09/178251294a7967399d7aebc4af2ed8a3-1.png' }}
            style={{ width: 334, height: 221, resizeMode: 'center' }}
          />
          <Text style={styles.titleText}>

            {bodyText}
            {'\n'}
          </Text>
          <Image
            source={{ uri: 'https://2.bp.blogspot.com/-GJmPdkO3gg8/WMCrGIAne_I/AAAAAAAGtUw/LV9wonX7jc8tYz1KX5OUZJawj_rFn6MrACLcB/s1600/AS002396_01.gif' }}
            style={{ width: 100, height: 100, resizeMode: 'center' }}
          />
          <Text style={{ alignItems: 'center' }}>
            Rilakkuma :
            {'   '}
            {count1}
            {' '}
            <TouchableOpacity
              style={styles.button}
              onPress={onPress1}
            >
              <Text style={styles.font}>♥</Text>
            </TouchableOpacity>
            {'\n'}
          </Text>
          <Image
            source={{ uri: 'https://2.bp.blogspot.com/-DLI-GNHQZDg/WfsS0IPsDkI/AAAAAAAMMDY/TjfVA_2qKh8q173hTOWIxGlBQpAth4m4wCLcBGAs/s1600/AS003260_09.gif' }}
            style={{ width: 100, height: 100, resizeMode: 'center' }}
          />
          <Text style={{ alignItems: 'center' }}>
            Korilakkuma :
            {'   '}
            {count2}
            {' '}
            <TouchableOpacity
              style={styles.button}
              onPress={onPress2}
            >
              <Text style={styles.font}>♥</Text>
            </TouchableOpacity>
            {'\n'}
          </Text>
          <Image
            source={{ uri: 'https://i.pinimg.com/originals/c9/8b/23/c98b234da8e9a9c12e05c88512cf95b5.gif' }}
            style={{ width: 100, height: 100, resizeMode: 'center' }}
          />
          <Text style={{ alignItems: 'center' }}>
            Kiiroitori :
            {'   '}
            {count3}
            {' '}
            <TouchableOpacity
              style={styles.button}
              onPress={onPress3}
            >
              <Text style={styles.font}>♥</Text>
            </TouchableOpacity>
            {'\n'}
          </Text>
          <Image
            source={{ uri: 'https://1.bp.blogspot.com/-gBr6EY6uE3I/WcMWqaLnxLI/AAAAAAAJu1M/PwzlBdfyJHEHuY65hzZD_0HVSOtWQUKfgCLcBGAs/s1600/AS003106_07.gif' }}
            style={{ width: 100, height: 100, resizeMode: 'center' }}
          />
          <Text style={{ alignItems: 'center' }}>
            Chairoikoguma :
            {'   '}
            {count4}
            {' '}
            <TouchableOpacity
              style={styles.button}
              onPress={onPress4}
            >
              <Text style={styles.font}>♥</Text>
            </TouchableOpacity>
            {'\n'}
          </Text>
          <Button
            title="Sent"
            color="#ffd461"
            onPress={() => navigation.navigate('Result')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

export default Second;
