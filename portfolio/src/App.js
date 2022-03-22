// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RepExercise from './components/RepetitionExercise';
import DurExercise from './components/DurationExercise';

let ExerciseData = [
  {
    name: "Push-Ups",
    type: "repetition"
  },
  {
    name: "Cycling",
    type: "duration"
  },
  {
    name: "Squats",
    type: "repetition"
  },
  {
    name: "Plank",
    type: "duration"
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

  if (exType == "repetition") {
    console.log(exName)
    return <RepExercise name={exName}></RepExercise>
  }
  else if (exType == "duration") {
    console.log(exName)
    return <DurExercise name={exName}></DurExercise>
  }
  else {
    return <Menu setExercise={props.setExercise}></Menu>
  }

}


function App() {
  const [exercise, setExercise] = useState(ExerciseData)

  return (
    <div className="App">
      <h1>Lab 5</h1>
      <SelectEx setExercise={setExercise} theExercise={exercise} />
    </div>
  );
}

export default App;

//Create menu screen and exercise screen
//create repetition and timer exercise components
//create different variations of each exercise component
