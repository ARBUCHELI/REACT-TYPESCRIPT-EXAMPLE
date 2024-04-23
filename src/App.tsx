import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //let firstValue: string = 'Manny';
    //let firstValue: number = 34;
    //let firstValue: boolean = true;
    //let firstValue: number[] = [2, 3, 56];
    //let firstValue: Array<string> = ['2', '3', 'manny'];

    // tuple
    let aTuple: [string, number] = ['Manny', 34];

    // enum
    enum Codes {first = 1, second = 2};

    // any
    //let firstName: any = 'Manny';
    let firstName: any = 3;

    // void
    const warning = (): void => {
      console.log('Warning');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* The value {aTuple[0]} is of { typeof aTuple[0]} type! */}
            The value {firstName} is of { typeof firstName} type!
          </p>
        </header>
      </div>
    );
  }

}

export default App;
