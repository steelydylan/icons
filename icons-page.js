import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Linking } from 'react-native';

export default class IconPage extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        {items.map((item) => {
          return (<TouchableHighlight
            style={styles.iconDevider}
            onPress={() => {
              Linking.openURL(item.url);
            }}
          >
            <Image
              style={styles.icon}
              source={require('./assets/icon.png')}
            />
          </TouchableHighlight>);
        })}
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50
  },
  text: {
    fontSize: 40
  },
  icon: {
    width: 50,
    height: 50
  },
  iconDevider: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 40
  }
});
