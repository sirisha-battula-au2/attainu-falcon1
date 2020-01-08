import React from "react";
import ReactDOM from "react-dom";
import Timer from "./timer";
import Score from "./score";
​
let json = [
  {
    question: "WWW stands for?",
    answer: "World Wide Web"
  },
  {
    question: "Which software is used to view web pages?",
    answer: "Web Browser"
  },
  {
    question: "ISP stands for?",
    answer: "Internet Service Provider"
  },
  {
    question: "CSS stands for?",
    answer: "Cascading Style Sheet"
  },
  {
    question: "HTML stands for?",
    answer: "Hyper Text Markup Language"
  },
  {
    question: "The company behind Windows operating system?",
    answer: "Microsoft"
  },
  {
    question: "Who created Javascript?",
    answer: "Brendan Eich"
  },
  {
    question: "The company behind Chrome web browser?",
    answer: "Google"
  },
  {
    question: "Name a popular version control system",
    answer: "Git"
  },
  {
    question: "Which tag is used to link an image in a HTML page?",
    answer: "img"
  }
];
​
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      score: 0,
      seconds: 60,
      nxquestion: 0
    };
​
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.timeup = this.timeup.bind(this);
  }
​
  timeup() {
    this.setState({ seconds: 0 });
  }
​
  handleChangeAnswer(event) {
    this.setState({ answer: event.target.value });
  }
​
  handleClickSubmit(event) {
    let question = this.state.nxquestion;
    let score = this.state.score;
    question++;
    console.log("submit answer ======>>>>>>", question);
    console.log("json ans", json[this.state.nxquestion].answer);
​
    if (json[this.state.nxquestion].answer === this.state.answer) {
      //   score++;
​
      this.setState({
        score: score,
        nxquestion: question,
        answer: " "
      });
      console.log("score" + score);
    } else {
      this.setState({
        nxquestion: question,
        answer: ""
      });
      console.log("wrong answer");
    }
  }
​
  render() {
    if (this.state.nxquestion < 10 && this.state.seconds !== 0) {
      return (
        <div className="container m-5">
          <div
            className="card bg-warning text-white text-center"
            style={{ width: "70rem" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                {json[this.state.nxquestion].question}
              </h1>
              <input
                type="text"
                value={this.state.answer}
                className="form-control mb-4"
                placeholder="Please Enter your Answer"
                onChange={this.handleChangeAnswer}
              />
              <button
                className="btn btn-primary"
                onClick={this.handleClickSubmit}
              >
                submit
              </button>
              <Timer timeup={this.timeup} />
            </div>
          </div>
        </div>
      );
    } else {
      return <Score score={this.state.score} />;
    }
  }
}
​
ReactDOM.render(<Quiz />, document.getElementById("root"));