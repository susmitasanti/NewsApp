import Navbar from './components/Navbar';
import './App.css';
import Spinner from './components/Spinner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      // bcb7ffda785540c5881aa5787bafd6dc
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<News key="general" pageSize={8} country="in" category="general"/>}></Route>
        <Route exact path='/business' element={<News key="business" pageSize={8} country="in" category="business"/>}></Route>
        <Route exact path='/entertainment' element={<News key="entertainment" pageSize={8} country="in" category="entertainment"/>}></Route>
        <Route exact path='/general' element={<News key="general" pageSize={8} country="in" category="general"/>}></Route>
        <Route exact path='/health' element={<News key="health" pageSize={8} country="in" category="health"/>}></Route>
        <Route exact path='/science' element={<News key="science" pageSize={8} country="in" category="science"/>}></Route>
        <Route exact path='/sports' element={<News key="sports" pageSize={8} country="in" category="sports"/>}></Route>
        <Route exact path='/technology' element={<News key="technology" pageSize={8} country="in" category="technology"/>}></Route>



        
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
