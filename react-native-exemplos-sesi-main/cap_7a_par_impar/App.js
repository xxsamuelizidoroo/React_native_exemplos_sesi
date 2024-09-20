import React from 'react';
import ChecaNumero from './components/ChecaNumero';

export default class App extends React.Component {
    render() {
    return (
      <ChecaNumero numero={3} />
    );
  }
}