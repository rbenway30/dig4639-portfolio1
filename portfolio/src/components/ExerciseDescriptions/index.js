import React from 'react'
export default class ExDescription extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { count: 0 }
    }
    render() {
        // console.log("Repetition Exercise")
        return <div>
            <h3>Exercise Description:</h3>
            <p>{this.props.description}</p>
        </div>
    }
}