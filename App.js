//@flow
import * as React from 'react'
import Navigator from './src/routerConfig/Router';

type Props = {};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    return <Navigator />;
  }
}

export default App;