import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react';
import './App.css';
import Layout from './layout/Layout'

function App() {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default App;