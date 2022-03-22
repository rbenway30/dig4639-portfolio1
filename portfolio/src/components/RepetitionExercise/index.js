import React from 'react'
export default class RepExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    render() {
        // console.log("Repetition Exercise")
        return <div>
            <h2>{this.props.name}</h2>
            <p>You've completed {this.state.count} reps</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                Count Rep
            </button>
            <button onClick={() => this.setState({ count: this.state.count = 0 })}>
                Reset
            </button>
            {/* return button ??*/}
        </div>
    }
}