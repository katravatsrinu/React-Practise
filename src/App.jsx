import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log("Component is mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        console.log(this.props, this.state);
        console.log("Component is updated");
    }

    componentWillUnmount() {
        console.log("Component will be unmounted");
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCounter: true
        };
    }

    toggleCounter = () => {
        this.setState((prevState) => ({
            showCounter: !prevState.showCounter 
        }));
    };

    render() {
        return (
            <div>
                <h1>React Life Cycle Example</h1>
                <button onClick={this.toggleCounter}>
                    {this.state.showCounter ? "Unmount Counter" : "Mount Counter"}
                </button>
                {this.state.showCounter && <StateExample />}
                {!this.state.showCounter && <p>Counter is unmounted</p>}
            </div>
        );
    }
}

export default App;
