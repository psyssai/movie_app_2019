import React from 'react';
import PropTypes from "prop-types";

//Food Component
function Food({name, evaluation}){
  return (<h2>I like {name}. It is {evaluation}.</h2>)
}

//Object
const foodILike = [
  {
    id : 1,
    name: "Pizza",
    evaluation: "Good"
  },
  {
    id : 2,
    name:"Steak",
    evaluation:"Excellent"
  }
];

//props 유효성 체크
Food.propTypes = {
  name: PropTypes.string.isRequired,
  evaluation : PropTypes.string.isRequired
};


//food Render 함수
function foodRender(food)
{
  return (<Food key = {food.id} name = {food.name} evaluation = {food.evaluation}/>);
}

//App Component
function App() {
  return (
    <div>
      {foodILike.map(foodRender)}
    </div>);
}

export default App;
