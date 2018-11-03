import React from 'react';

class Heading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>Тест на тему: {this.props.theme}</h2>
        )
    }
}

export default Heading;