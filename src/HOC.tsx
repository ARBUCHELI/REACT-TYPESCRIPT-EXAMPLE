import React, { Component } from 'react';

// Define the state
const initialState = {
    name: 'Manny',
    //message: 'TypeScript is cool!!'
    message: 'HOCs are cool!!'
  }
  
// Define the type of the state
type State = Readonly<typeof initialState>;

// This function will return a class
const messageHoc = (WrappedComponent: any) => {
    class HOC extends Component<{}, State> {
        readonly state: State = initialState;

        render() {
            return (
                <WrappedComponent name={this.state.name} message={this.state.message} />
            )
        }
    }

    return HOC;
}

export default messageHoc;

