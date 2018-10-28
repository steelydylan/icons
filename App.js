import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' },
        { name: 'name', url: 'http://example.com' }
      ]
    };
  }


  render() {
    const { items } = this.state;

    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'ICONS', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.container}>
          {items.map((item) => {
            return (<View style={styles.iconDevider}>
              <Image source={require('./assets/icon.png')} style={styles.icon}/>
            </View>);
          })}
        </View>
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
