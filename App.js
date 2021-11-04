import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
        <Text>我是機二A的劭劭
        {"\n\n"}我喜歡拉拉熊熊~{"\n\n"}</Text>
        
        
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOwfy9VL86DkSTFAtMI-_UOiAHusLN9QmxCI-AeZKQgw4iK8TqOingY7x4xPANHlM6Sw&usqp=CAU',
          }}
        />
      </View>
    
  );
}
export default DisplayAnImage;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#FFF89E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 350,
    height: 200,
  },
  space: {
    flex: 2,
  },
});


