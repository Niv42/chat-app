import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';
import ApolloProviderCopmonent from './Chat';

export default function App() {
  return (
    <div>
      <ApolloProviderCopmonent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
