import React, { useState, useEffect } from 'react';
import {
  Text, Button, ScrollView, RefreshControl,
} from 'react-native';
import {
  Card,
} from 'react-native-paper';
import firebase from 'firebase';
import TimeController from './Time';

const firebaseConfig = {
  projectId: 'test-85cdf',
};

export default function App() {
  const [item1, setItems1] = useState([]);
  useEffect(() => {
    TimeController.getLastestTime().then((res) => {
      setItems1(res);
    }).catch((err) => {
      throw err;
    });
  }, []);

  const [item2, setItems2] = useState([]);
  useEffect(() => {
    TimeController.getAllTimes().then((res) => {
      setItems2(res);
    }).catch((err) => {
      throw err;
    });
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh1 = () => {
    setRefreshing(true);
    TimeController.getLastestTime().then((res) => {
      setItems1(res);
      setRefreshing(false);
    });
  };
  const onRefresh2 = () => {
    TimeController.getAllTimes().then((res) => {
      setItems2(res);
      setRefreshing(false);
    });
  };

  const onRefresh = () => {
    onRefresh1();
    onRefresh2();
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  return (
    <ScrollView
      refreshControl={(<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />)}
    >
      <Text>{'\n'}</Text>
      { item1.map(({
        id, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 1, margin: 2,
          }}
        >
          <Card.Content>
            <Text>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Button
        onPress={() => {
          TimeController.getLastestTime().then(() => { onRefresh1(); });
        }}
        title="get lastest time"
        color="#FFBF00"
      />

      { item2.map(({
        id, time,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 5, margin: 2,
          }}
        >
          <Card.Content>
            <Text>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Button
        onPress={() => {
          TimeController.getAllTimes().then(() => { onRefresh2(); });
        }}
        title="get all time"
        color="#007FFF"
      />
      <Text>{'\n'}</Text>
      <Button onPress={() => TimeController.addCurrentTime()} title="add current time" color="#00FF00" />
      <Text>{'\n'}</Text>
      <Button onPress={() => TimeController.deleteEarliestTime()} title="delete earliest time" color="#FF0000" />
    </ScrollView>
  );
}
