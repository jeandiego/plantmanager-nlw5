import { registerRootComponent } from 'expo';
import React from 'react';
import Welcome from './screens/Welcome';

class App extends React.Component {
  render() {
    return <Welcome />
  }
}

registerRootComponent(App);