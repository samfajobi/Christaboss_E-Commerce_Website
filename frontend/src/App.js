import React from 'react';
import './App.css';
import  Home from '././components/Home/Home'
import Hero from './components/Hero/Hero';
import LogoNav from './components/LogoNav/LogoNav';
import  Navbar from '././components/Navbar/Navbar'
import  CartScreen from './screens/CartScreen/CartScreen';
import  ShopScreen from './screens/ShopScreen/ShopScreen';
import  ContactPage from './components/ContactUs/Contact'
import  AboutPage from './components/AboutUs/About';
import  ProductScreen from './screens/ProductScreen/ProductScreen';
import Footer from '././components/Footer/Footer'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Hero /> 
        <Navbar />
        <LogoNav />
        <div className='content'>  
          <Routes> 
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/aboutus" component={AboutPage}></Route>
            <Route exact path="/shop" component={ShopScreen}></Route>
            <Route exact path="/product/:id" component={ProductScreen}></Route>
            <Route exact path="/cartscreen" component={CartScreen}></Route>
            <Route exact path="/contactus" component={ContactPage}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
