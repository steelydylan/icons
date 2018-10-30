import React from 'react';
import { View } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Header } from 'react-native-elements';
import IconsPage from './icons-page';
import BrowsePage from './browse-page';

/*
  学習用ディレクトリー
  日付を保存して日時順にページ一覧が表示される
*/

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'name', url: 'http://example.com', id: 'hoge1' },
        { name: 'name', url: 'http://example.com', id: 'hoge2' },
        { name: 'name', url: 'http://example.com', id: 'hoge3' },
        { name: 'name', url: 'http://example.com', id: 'hoge4' },
        { name: 'name', url: 'http://example.com', id: 'hoge5' },
        { name: 'name', url: 'http://example.com', id: 'hoge6' },
        { name: 'name', url: 'http://example.com', id: 'hoge7' },
        { name: 'name', url: 'http://example.com', id: 'hoge8' },
        { name: 'name', url: 'http://example.com', id: 'hoge9' },
        { name: 'name', url: 'http://example.com', id: 'hoge10' },
        { name: 'name', url: 'http://example.com', id: 'hoge11' },
        { name: 'name', url: 'http://example.com', id: 'hoge12' }
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
          <BrowsePage tabLabel="ブラウザー"/>
        </ScrollableTabView>
      </View>);
  }
}