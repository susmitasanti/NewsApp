import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import News from './components/News';



export default class App extends Component {
  constructor(){
    super();
    this.state={
      currentMode:"light",
    }
    document.body.style.backgroundColor="white"
  }

  changeModeL = async() =>{
    this.setState({
      currentMode:"light",
    })
    document.body.style.backgroundColor="white"
  }
  changeModeD = async() => {
    this.setState({
      currentMode:"dark",
    })
    document.body.style.backgroundColor="#343a40"
  }

  changeModeDG = async() =>{
    this.setState({
      currentMode:"darkGreen",
    })
    document.body.style.backgroundColor="#3a5a40"
  }

  changeModeDB = async() =>{
    this.setState({
      currentMode:"darkBlue",
    })
    document.body.style.backgroundColor="#1d3557"
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar currentMode={this.state.currentMode} darkMode={this.changeModeD} darkGreenMode={this.changeModeDG} lightMode={this.changeModeL} darkBlueMode={this.changeModeDB}/>
        <Routes>
        <Route exact path='/' element={<News currentMode={this.state.currentMode} key="general" pageSize={8} country="in" category="general" heading="General"/>}></Route>
        <Route exact path='/business' element={<News currentMode={this.state.currentMode} key="business" pageSize={8} country="in" category="business" heading="Business"/>}></Route>
        <Route exact path='/entertainment' element={<News currentMode={this.state.currentMode} key="entertainment" pageSize={8} country="in" category="entertainment" heading="Entertainment"/>}></Route>
        <Route exact path='/general' element={<News currentMode={this.state.currentMode} key="general" pageSize={8} country="in" category="general" heading="General"/>}></Route>
        <Route exact path='/health' element={<News currentMode={this.state.currentMode} key="health" pageSize={8} country="in" category="health" heading="Health"/>}></Route>
        <Route exact path='/science' element={<News currentMode={this.state.currentMode} key="science" pageSize={8} country="in" category="science" heading="Science"/>}></Route>
        <Route exact path='/sports' element={<News currentMode={this.state.currentMode} key="sports" pageSize={8} country="in" category="sports" heading="Sports"/>}></Route>
        <Route exact path='/technology' element={<News currentMode={this.state.currentMode} key="technology" pageSize={8} country="in" category="technology" heading="Technology"/>}></Route>



        
        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}
