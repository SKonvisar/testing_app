import React from 'react';
import './Heading.css'

class Heading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2 className="heading">Тест на тему: {this.props.topic}</h2>
        )
    }
}

export default Heading;