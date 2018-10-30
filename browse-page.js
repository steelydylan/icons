import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

export default class BrowsePage extends React.Component {
  render() {
    return (<View style={styles.container}>
      <FormInput style={{ flex:1, backgroundColor: '#ededed' }}/>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50
  }
});