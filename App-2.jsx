import React, { useState, useEffect } from 'react';
import {
  Text, Button, ScrollView, RefreshControl,
} from 'react-native';
import {
  Card, Title, TextInput,
} from 'react-native-paper';
import firebase from 'firebase';
import fruit from './Fruit';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const firebaseConfig = {
  apiKey: 'AIzaSyBm2ChoLgXWTpgqEY-ZcANn2Uymmop0hPM',
  authDomain: 'test-85cdf.firebaseapp.com',
  projectId: 'test-85cdf',
  storageBucket: 'test-85cdf.appspot.com',
  messagingSenderId: '15833338613',
  appId: '1:15833338613:web:b7f820d6b80972c40babbc',
  measurementId: 'G-KLH3NVQ7PH',
};

export default function App() {
  const [item, setItems] = useState([]);
  useEffect(() => {
    fruit.getAllFruits().then((res) => {
      setItems(res);
    }).catch((err) => {
      throw err;
    });
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    fruit.getAllFruits().then((res) => {
      setItems(res);
      setRefreshing(false);
    });
  };

  const [text, onChangeText] = React.useState(null);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  return (
    <ScrollView
      refreshControl={(<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />)}
    >
      { item.map(({
        id, name, price,
      }) => (
        <Card
          key={id}
          style={{
            flex: 1, padding: 10, margin: 4,
          }}
        >
          <Card.Content>
            <Title>{name}</Title>
            <Text>{`價錢:${price}`}</Text>
          </Card.Content>
        </Card>
      ))}
      <Button
        onPress={() => fruit.getAllFruits()}
        title="get all fruit"
        color="#007FFF"
      />
      <Button
        onPress={() => {
          fruit.deleteNotApple().then(() => { onRefresh(); });
        }}
        title="delete not apple"
        color="#007FFF"
      />
      <Text>
        fruit
        {'\n'}
        name:
      </Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="input"
      />
      <Button
        onPress={() => {
          fruit.addFruit();
          onRefresh();
        }}
        title="add fruit"
        color="#007FFF"
      />
    </ScrollView>
  );
}
