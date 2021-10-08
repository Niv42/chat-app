import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'shards-react';
import 'shards-ui/dist/css/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import Chat from 'chat/Chat';

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo
      quaerat quisquam natus sunt quas quis qui accusantium ab esse cupiditate
      corrupti fuga, cumque eaque obcaecati reprehenderit labore odit iure?
    </p>
    <h1>Chat!</h1>
    <p>chat goes here</p>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo
      quaerat quisquam natus sunt quas quis qui accusantium ab esse cupiditate
      corrupti fuga, cumque eaque obcaecati reprehenderit labore odit iure?
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
