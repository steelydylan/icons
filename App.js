import React from 'react';
import { View } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Header } from 'react-native-elements';
import IconsPage from './icons-page';

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
      <View style={{ display: 'flex', height: '100%' }} >
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'ICONS', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <DefaultTabBar />}>
          <IconsPage tabLabel="お気に入り" items={items} />
          <View tabLabel="ブラウザー"/>
        </ScrollableTabView>
      </View>);
  }
}