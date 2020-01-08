import React from "react"
class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 60 };
    }
    tick() {
        let seconds = this.state.seconds
        if(this.state.seconds !==0){
            seconds--;
      this.setState({
        seconds: seconds
      });
    }
  else{
      this.setState({
          seconds : seconds
      });
      this.props.timeup();
    }
  }
    componentDidMount() {
      console.log("componentDid Mount called")
      let interval = setInterval(() => {
        this.tick()
      },1000)
    }
  
   componentWillMount() {
       clearInterval(this.interval);
   }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds.toFixed(1)}
        </div>
      );
    }
  }
  
  export default Timer;