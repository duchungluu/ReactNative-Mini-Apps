import React from 'react';
import { Text, StyleSheet, View, Button , TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props);

  return <View>
      <Text style={styles.text}>Welcome Mighty!</Text>
      <Button
        onPress={ () => props.navigation.navigate('Components')}
        title="Components Demo">
      </Button>

      <TouchableOpacity onPress={() => console.log('LÖL')}>
        <Text>List Demo</Text>
        <Text>List Demo</Text>
        <Text>List Demo</Text>
        <Text>List Demo</Text>

      </TouchableOpacity>

    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
