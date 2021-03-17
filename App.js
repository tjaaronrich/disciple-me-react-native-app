import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  // Would need to make the loading between screens happen in the angular app since this is a single page application.
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  showSpinner() {
    this.setState({ visible: true });
  }

  render() {
    const url = "http://157.230.11.18:7777/";
    const loggedInUrl = "http://157.230.11.18:7777/latest";

    return (
        <View style={styles.view}>
          <WebView 
            style={styles.webview}
            source={{ uri: url }} 
            onNavigationStateChange={(event) => {
              if(event.url !== loggedInUrl) {
                this.showSpinner();
                // this.hideSpinner();
              }
            }}
            onLoad={() => this.hideSpinner()}
            />
          {this.state.visible && (
            <ActivityIndicator
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
              }}
              color="#1884BA"
              size="large"
            />
          )}
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
