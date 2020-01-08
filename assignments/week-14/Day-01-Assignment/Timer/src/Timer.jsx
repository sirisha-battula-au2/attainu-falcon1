class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState({
        seconds: this.state.seconds + 0.1
      });
    }
  
    componentDidMount() {
      console.log("componentDid Mount called")
      let interval = setInterval(() => {
        this.tick()
      },100)
    }
  
   
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds.toFixed(1)}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Timer />,
    document.getElementById("app")
  );