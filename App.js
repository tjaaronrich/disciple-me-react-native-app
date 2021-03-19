import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
        <View style={styles.view}>
          <WebView 
            style={styles.webview}
            source={{ uri: "http://157.230.11.18:7777/" }} 
            />
        </View>
             
    );
  }
 
}

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  webview: {
    height: "100%",
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
});
