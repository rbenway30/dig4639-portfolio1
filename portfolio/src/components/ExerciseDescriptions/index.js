import React from 'react'
export default class ExDescription extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { count: 0 }
    }
    render() {
        // console.log("Repetition Exercise")
        return <div>
            <p>{this.props.description}</p>
        </div>
    }
}