import React from 'react';
import {
  StyleSheet, Text, Button, View,
} from 'react-native';
import firebase from 'firebase';
import TimeController from './Time';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firebaseConfig = {
  projectId: 'test-85cdf',
};

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  return (
    <View style={styles.container}>
      <Button onPress={TimeController.getLastestTime} title="get lastest time" color="#FFBF00" />
      <Text>{'\n'}</Text>
      <Button onPress={TimeController.getAllTimes} title="get all time" color="#007FFF" />
      <Text>{'\n'}</Text>
      <Button onPress={TimeController.addCurrentTime} title="add current time" color="#00FF00" />
      <Text>{'\n'}</Text>
      <Button onPress={TimeController.deleteEarliestTime} title="delete earliest time" color="#FF0000" />
    </View>
  );
}
