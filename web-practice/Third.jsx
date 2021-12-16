import React from 'react';
import {
  Text, View, SafeAreaView, Image,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from '../Styles';

function Third() {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container2}>
        <Image
          source={{ uri: 'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/09/178251294a7967399d7aebc4af2ed8a3-1.png' }}
          style={{ width: 334, height: 221, resizeMode: 'center' }}
        />

        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>Do you vote?</Text>
      </View>
    </SafeAreaView>
  );
}

export default Third;
