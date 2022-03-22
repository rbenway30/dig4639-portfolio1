// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RepExercise from './components/RepetitionExercise';
import DurExercise from './components/DurationExercise';

let ExerciseData = [
  {
    name: "Push-Ups",
    type: "repetition",
    description: "Lying face down, keeping legs and back straight, extend arms straight to push body up and back down again."
  },
  {
    name: "Cycling",
    type: "duration",
    description: "In a seated position, alternate pushing pedals with each leg in a consistent rythym. Try to keep a consistent pace for 30 minutes."
  },
  {
    name: "Squats",
    type: "repetition",
    description: "With your feet shoulder width apart, bend at the knee until your knee is at a 90 degree angle. Be sure to engage your core and glutes."
  },
  {
    name: "Plank",
    type: "duration",
    description: "Facing downward, hold yourself up by your forearms and toes, keeping your torso and legs in a straigt line. Hold for 1 minute"
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
