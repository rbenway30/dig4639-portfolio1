import React, { useState, useEffect } from 'react';
import ExDescription from '../ExerciseDescriptions'
import refreshApp from '../Refresh'
import DurMotivation from '../DurMotivation';
// //function states uses useState, which sets the state for each individual value
export default function DurExercise(props) {
    //sets the state of time to 0
    const [time, setTime] = useState(0);

    //sets the state of running to false. Changed on button click.
    const [running, setRunning] = useState(false);


    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((curTime) => curTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);


    let minutes = Math.floor((time / 60000) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    let miliseconds = ((time / 10) % 100);
    return (
        <>
            <div>
                <h2>{props.name}</h2>
                <ExDescription description={props.description}></ExDescription>
                <DurMotivation goal={props.goal} seconds={seconds}></DurMotivation>
                <p>Timer: {String(minutes).padStart(2, 0)}:
                    {String(seconds).padStart(2, 0)}:
                    {String(miliseconds).padStart(2, 0)}</p>
            </div>
            <div>
                <button onClick={() => setRunning(true)}>Start</button>
                <button onClick={() => setRunning(false)}>Stop</button>
                <button onClick={() => setTime(0)}>Reset</button>
                <div>
                <button onClick={refreshApp}>Back</button>
                </div>
            </div>
        </>
    )

}