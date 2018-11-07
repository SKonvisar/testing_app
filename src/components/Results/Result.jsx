import React from 'react';

class Result extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 text-center">
                    <h2>Ваш результат</h2>
                    <h3>{`${this.props.rightAnswer} правильных ответов из ${this.props.counQuestion}`}</h3>
                    <button onClick={() => this.props.unSubmit()}
                            className="btn btn-primary"    
                    >
                    Назад
                    </button>    
                </div>
            </div>
        )
    }
}

export default Result;