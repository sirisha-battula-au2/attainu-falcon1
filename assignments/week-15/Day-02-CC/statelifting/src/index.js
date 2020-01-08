import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input : null
        }

        this.updateInput = this.updateInput.bind(this);
    }
    
    updateInput(input) {
        this.setState({input:input});
    }
    render() {
        return(
          <main className = "container m-4">
          <h3>React state Coding Challenge</h3>    
          <hr/>
          <Input updateInput={this.updateInput}/>
          <hr/>
          <Display/>
          <hr/>

          <h3>{this.state.input}</h3>
          </main>
        );
    }
}

class Input extends React.Component{

    constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
    this.props.updateInput(event.target.value);
    }

    render() {
        return(
          <input onChange = {this.handleInput} className ="form-control"/>
        );
    }
}

class Display extends React.Component{
    render() {
        return(
            <h1>Input Data</h1>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));