import React, { Component } from 'react';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <Catalog />
          </Grid>
          <Grid item xs={6}>
            <Cart />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
