// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RepExercise from './components/RepetitionExercise';
import DurExercise from './components/DurationExercise';

let ExerciseData = [
  {
    name: "Push-Ups",
    type: "repetition",
    description: "Lie horizontally, push against the ground"
  },
  {
    name: "Cycling",
    type: "duration",
    description: "Lie horizontally, push against the ground"
  },
  {
    name: "Squats",
    type: "repetition",
    description: "Lie horizontally, push against the ground"
  },
  {
    name: "Plank",
    type: "duration",
    description: "Lie horizontally, push against the ground"
  }
]


function Menu(props) {
  return (
    <>
      <h1>Go Do Something!</h1>

      {/* could prob use map here)*/}
      <button onClick={() => props.setExercise(ExerciseData[0])}>{ExerciseData[0].name}</button>
      <button onClick={() => props.setExercise(ExerciseData[1])}>{ExerciseData[1].name}</button>
      <button onClick={() => props.setExercise(ExerciseData[2])}>{ExerciseData[2].name}</button>
      <button onClick={() => props.setExercise(ExerciseData[3])}>{ExerciseData[3].name}</button>
    </>

  )
}



function SelectEx(props) {
  const exName = props.theExercise.name;
  const exType = props.theExercise.type;
  const exDes = props.theExercise.description;

  if (exType == "repetition") {
    console.log(exName)
    return <RepExercise name={exName} description={exDes}></RepExercise>
  }
  else if (exType == "duration") {
    console.log(exName)
    return <DurExercise name={exName} description={exDes}></DurExercise>
  }
  else {
    return <Menu setExercise={props.setExercise}></Menu>
  }

}


function App() {
  const [exercise, setExercise] = useState(ExerciseData)

  return (
    <div className="App">
      <h1>Portfolio 1</h1>
      <SelectEx setExercise={setExercise} theExercise={exercise} />
    </div>
  );
}

export default App;

//Create menu screen and exercise screen
//create repetition and timer exercise components
//create different variations of each exercise component
