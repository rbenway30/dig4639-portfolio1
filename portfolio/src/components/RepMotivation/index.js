import React from 'react'
export default class RepMotivation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const goal = this.props.goal;
        const count = this.props.count;
        if (count >= goal){
            return (
            <div>
                <h2>Congrats! You hit your goal!</h2>
            </div>
            )
        }
        else{
            return <div>
            <h2>Goal: {goal} Reps</h2>
        </div>
        }
    }
}