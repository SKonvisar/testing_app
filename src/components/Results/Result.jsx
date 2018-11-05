import React from 'react';

class Result extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Ваш результат</h2>
                <h3>{`${this.props.rightAnswer} правильных ответов из ${this.props.counQuestion}`}</h3>
                <button onClick={() => this.props.unSubmit()}>Назад</button>
            </div>
        )
    }
}

export default Result;