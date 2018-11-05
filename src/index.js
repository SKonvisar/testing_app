import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/Heading/Heading';
import QuestionField from './components/QuestionField/QuestionField';
import Result from './components/Results/Result';

const tests = [
    {
        topic: "Football",
        questions: [
            {
                title: "First question?",
                inputType: "TEXT",
                answers: [
                    {
                        text: "first answer",
                        isRight: false
                    },
                    {
                        text: "second answer",
                        isRight: true
                    },
                    {
                        text: "third answer",
                        isRight: false
                    },
                    {
                        text: "four answer",
                        isRight: false
                    }
                ]
            },
            {
                title: "Second question?",
                inputType: "RADIO",
                answers: [
                    {
                        text: "first answer",
                        isRight: false
                    },
                    {
                        text: "second answer",
                        isRight: false
                    },
                    {
                        text: "third answer",
                        isRight: true
                    },
                    {
                        text: "four answer",
                        isRight: false
                    }
                ]
            },
            {
                title: "Third question?",
                inputType: "CHECKBOX",
                answers: [
                    {
                        text: "first answer",
                        isRight: false
                    },
                    {
                        text: "second answer",
                        isRight: true
                    },
                    {
                        text: "third answer",
                        isRight: false
                    },
                    {
                        text: "four answer",
                        isRight: true
                    }
                ]
            },
            {
                title: "Four question?",
                inputType: "SELECT",
                answers: [
                    {
                        text: "first answer",
                        isRight: false
                    },
                    {
                        text: "second answer",
                        isRight: true
                    },
                    {
                        text: "third answer",
                        isRight: false
                    },
                    {
                        text: "four answer",
                        isRight: false
                    }
                ]
            },
            {
                title: "Five question?",
                inputType: "TEXT",
                answers: [
                    {
                        text: "first answer",
                        isRight: false
                    },
                    {
                        text: "second answer",
                        isRight: true
                    },
                    {
                        text: "third answer",
                        isRight: false
                    },
                    {
                        text: "four answer",
                        isRight: false
                    }
                ]
            }
        ]
    }
]

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            test: tests[0],
            submited: false,
            rightAnswer: 0,                    
        }
    }
    submit(n){
        this.setState({
            submited: true,
            rightAnswer: n
        })
    }
    unSubmit(){
        this.setState({
            submited: false,
            rightAnswer: 0
        })
    }
    render() {
        let renderEl;
        if (!this.state.submited){
            renderEl = (
                <div>
                    <Heading topic={this.state.test.topic} />
                    <QuestionField  questionsList={this.state.test.questions}
                                    submit={this.submit.bind(this)}
                     />
                </div>
            )
        } else {
            renderEl = <Result  rightAnswer={this.state.rightAnswer} 
                                counQuestion={this.state.test.questions.length}
                                unSubmit={this.unSubmit.bind(this)}        
                        />
        }
        return (
            renderEl
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
module.hot.accept();