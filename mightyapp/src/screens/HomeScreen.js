import React from 'react';
import { Text, StyleSheet, View, Button , TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props);

  return (
    <View>
      <Text style={styles.text}>Welcome Mighty!</Text>

      <Button
        onPress={ () => props.navigation.navigate('Components')}
        title="Components Demo">
      </Button>

      <Button
        onPress={ () => props.navigation.navigate('Image')}
        title="Image Demo">
      </Button>

      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text style={styles.text}>List Demo</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
