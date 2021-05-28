import {Switch,Route} from 'react-router-dom'
import React from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import HomePage from './common/HomePage';
import CartPage from './common/CartPage';
import NotFoundPage from './common/NotFoundPage';
import ManageProductsPage from './ManageProductsPage';
function App(){
    return (
    <div className='m-3'>
        <Header/>
        <Navigation/>
        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/products' component={ManageProductsPage}/>
            <Route path='/cart' component={CartPage}/>
            <Route path='*' component={NotFoundPage}/>
        </Switch>
    </div>

    )
}

export default App;