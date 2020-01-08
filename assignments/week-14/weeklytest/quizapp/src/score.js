import React from "react"
class Score extends React.Component {
   render() {
      return (
          <div className="container m-5">
          <div className = "alert alert-danger text-center"  role="alert" >
           <h1 className  = "alert-heading">Hey You Are Done</h1>
           <h2>Your Score: {this.props.score}</h2>
              </div>
              </div>
      );
   }
}
export default Score;