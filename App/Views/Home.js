/**
 * App登录界面
 *
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} = React;


var Api = require("../Common/Api");
var Base = require("../Common/Base");
var Spinner = require("../Components/Spinner");

var Router = require('react-native-router');
var AlLNoteList = require('./AllNoteList.js');

var firstRoute = {
  name: '我的笔记本',
  component: AlLNoteList
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Router
          firstRoute={firstRoute}
          headerStyle={styles.header}
          />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#0379d5'
  }
});