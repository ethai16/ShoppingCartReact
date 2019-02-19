import React, { Component } from 'react';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Grid from '@material-ui/core/Grid';
import './styles/App.css'


class App extends Component {

  render() {
    return (
      <div className = "fullscreen centerscreen">
        <Grid container className = "middle">
        <Grid item xs={5} className = "border borderNoBottom fontbigger">
          Redux Shopping Cart
        </Grid>
        <Grid container className = "middle heightForCart">
          <Grid className = "border" item xs={3}>
            <Catalog />
          </Grid>
          <Grid className = "border" item xs={2}>
            <Cart />
          </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
