import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import heart from './heart.png';
import logo from './logo.png';
import './App.css';
import Checkout from './Checkout';
import Info from './Box-info'
import Contact from './Box-contact'
import Program from './Box-program'

class App extends Component {
  constructor(){
    super();
    this.state = {
      box: <img src={heart} className="App-logo" alt="logo" />
    };
  }
  handleContact (e) {
    e.stopPropagation();    
    this.setState ({
      box: <Contact/>
    });
  }
  handleInfo (e) {
    e.stopPropagation();    
    this.setState ({
      box: <Info/>
    });
  }
  handleProgram (e) {
    e.stopPropagation();    
    this.setState ({
      box: <Program/>
    });
  }
  render() {
    //IF STAMENTS FOR BOX??
    return (
      <div className="App">
        <header className="App-header">
          <Col md={9}>
          <img src={logo} alt="text-logo" />
          </Col>
          <Col md={3}>
            
          </Col>
        </header>

        <body className="App-body">
          <Col md={4}>
          <div className="App-box">
            <p className="App-para-title">Welcome!</p>
            <div>

            <a onClick={this.handleInfo.bind(this)}><i class="fa fa-info-circle" aria-hidden="true"></i></a>
            <p className="App-para-sm">
              Info
            </p>
            </div>
            <tr/>

            <a onClick={this.handleContact.bind(this)}><i class="fa fa-phone-square" aria-hidden="true"></i></a>
            <p className="App-para-sm">
              Get in touch with our organizers!
            </p>
            <tr/>
            
            <a onClick={this.handleProgram.bind(this)}><i class="fa fa-sticky-note" aria-hidden="true"></i></a>
            <p className="App-para-sm">
              See the program!
            </p>

            <hr/>

            <Checkout
            name={'CAWS 2019'}
            description={'Please enter you card info'}
            amount={500}
            panelLabel={'Pay: '}
            />
          </div>   
          </Col>

          <Col md={8}>
          <div className="App-box">
          {this.state.box}
          </div>
          {/*<div className="App-box">
            <p className="App-para-title">The Conference</p>
            <p className="App-para">
              
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>
            <img src={heart} className="App-logo" alt="logo" />
          </div>*/}
          </Col>
        </body>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
