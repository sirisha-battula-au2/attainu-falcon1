import React from 'react';
import Card from "./card";
import Header from "./header";


class Home extends React.Component{
    render() {
        return(
           <div>

        <Header text=" Sustainable progress happens only when individuals are empowered
                to take control of their future Empowering students through
                individual-aligned (interest and ability), market-aligned (outcome
                focused) and scalable (accessible, affordable) higher education."/>


        <div className="card-deck">   
        <Card src={"https://i.ytimg.com/vi/BrPpGrsuN78/maxresdefault.jpg"} title="No Upfront Fee" text = " Pay only a percentage of your income Never pay more than you make  Pay when the program works for you Pay only when you have a job"/>
        <Card src={"https://i.ytimg.com/vi/BrPpGrsuN78/maxresdefault.jpg"} title="MERN STACK" text = " In this course we will build an in depth full stack social network application using Node.js, Express, React, Redux and MongoDB along with ES6+."/>
        <Card src={"https://i.ytimg.com/vi/BrPpGrsuN78/maxresdefault.jpg"} title="PAN INDIA" text = " PAN we strive to understand the requirements of our clients and provide to them time efficient and cost effective services under one roof"/>
        
        </div> 
        </div> 
      


        );
    }
}


export default Home;