import React, { Component } from 'react';
import logo from './Dna.gif';
import bg from './cosmic.jpg';
import './App.css';
import { Grid } from './components/Grid'
class App extends Component {
          constructor(props) {
         
        super(props);
      
        this.state = {
           aboutOnOff: false,
            isPaused: false,
            mount: true
        };
   
      
            
    }
    
    handleUnMount() {
        this.setState({renderGrid: false});
    }
    
  aboutClicked() {
      this.setState({
          aboutOnOff: !this.state.aboutOnOff
      })
  }  
    
    pause() {
        this.setState({
            isPaused: !this.state.isPaused
        })
       
    }
    reset() {
        window.location.reload();
    }
    
  render() {
      const isClicked = this.state.aboutOnOff ? true : false;
     const message = this.state.isPaused ? "Play" : "Pause";

      
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Conway&#39;s Game of life</h1>
        
            <p className="App-about" onClick={()=> this.aboutClicked()}><a>ABOUT</a></p>
     
        </header>
        
        <img src={bg} className="App-back" alt="logo" />
        
            {this.state.mount === true ? <Grid ref="Grid" isClicked={isClicked} isPaused={this.state.isPaused}/> : null}
      <div className="pause"><a onClick={()=> this.pause()}><h2>{message}</h2></a></div>
      <div className="reset"><a onClick={()=> this.reset()}><h2>Reset</h2></a></div>
      </div>
    );
  }
}

export default App;
