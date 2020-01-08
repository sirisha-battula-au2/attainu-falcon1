import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:"",
      meals:[]
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    
  }
  handleChange(e){
    this.setState({
      input:e.target.value
  
    })
  }
  handleClick(e){
    this.apiCall(this.state.input);
  }
  apiCall(searchValue){
    
   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+searchValue)
    .then(res => res.json())
    .then((result) => this.setState({
      meals : result.meals
      }))
  }
  
  render(){
    return(
      <div className="container w-80">
        <h1 className="text-primary">Welcome to Meal Search App</h1>
       <input className="form-control" type="text" onChange={this.handleChange}></input>
       <button className="btn btn-primary mt-2" onClick={this.handleClick}>Search</button>
       {this.state.meals ? (
         <div className="meals-container">
           {this.state.meals.map((meal,index) => (
             <div className = "single-meal text-center" key={index}>
               <h3>{meal.strMeal}</h3>
               <img src={meal.strMealThumb} alt=""></img>
             </div>
             
            ) )}
            </div>)
           :(<h2>Try another meal</h2>)
           }
       </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById("root"));