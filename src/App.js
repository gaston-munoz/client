import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Layout from './Containers/Layout'
import ListChanges from './Components/ListChanges'
import ListProducts from './Components/ListProducts'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/productos' exact component={ ListProducts } />
        <Route path='/productos/proyeccion' exact component={ ListChanges } />

        <Redirect to='/productos' />
      </Switch>
    </Layout>
  );
}

export default App;
