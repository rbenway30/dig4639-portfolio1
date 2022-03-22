import React from 'react'
export default class DurMotivation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const goal = this.props.goal;
        const seconds = this.props.seconds;
        if (seconds >= goal){
            return (
            <div>
                <p>Congrats! You hit your goal!</p>
            </div>
            )
        }
        else{
            return <div>
            <h2>Goal: {goal} Seconds</h2>
        </div>
        }
    }
}