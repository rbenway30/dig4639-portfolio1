import React from 'react'
export default class ExMotivation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const goal = this.props.goal;
        return <div>
            <h2>Goal: {goal}</h2>
        </div>
    }
}