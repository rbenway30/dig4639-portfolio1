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
                <p>Congrats! You hit your goal!</p>
            </div>
            )
        }
        else{
            return <div>
            <h2>Goal: {goal}</h2>
        </div>
        }
    }
}