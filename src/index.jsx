import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/Heading/Heading';
import QuestionField from './components/QuestionField/QuestionField';
import Result from './components/Results/Result';

const tests = [
    {
        topic: "Холодная война",
        questions: [
            {
                title: "Кто стал главным противником СССР после Второй мировой войны?",
                inputType: "TEXT",
                answers: [
                    {
                        text: "Великобритания",
                        isRight: false
                    },
                    {
                        text: "США",
                        isRight: true
                    },
                    {
                        text: "Япония",
                        isRight: false
                    },
                    {
                        text: "Франция",
                        isRight: false
                    }
                ]
            },
            {
                title: "В каком году была произнесена знаменитая фултонская речь Черчилля?",
                inputType: "RADIO",
                answers: [
                    {
                        text: "1945",
                        isRight: false
                    },
                    {
                        text: "1946",
                        isRight: true
                    },
                    {
                        text: "1947",
                        isRight: false
                    },
                    {
                        text: "1948",
                        isRight: false
                    }
                ]
            },
            {
                title: "Что представляла собой Доктрина Трумэна?",
                inputType: "CHECKBOX",
                answers: [
                    {
                        text: "Использование ядерного оружия",
                        isRight: true
                    },
                    {
                        text: "Экономическая помощь восточноевропейским странам",
                        isRight: true
                    },
                    {
                        text: "Формирование военно-политического блока под руководством США",
                        isRight: true
                    },
                    {
                        text: "Мир США и СССР",
                        isRight: false
                    }
                ]
            },
            {
                title: "Какую опасность представлял «Карибский кризис» 1962 года?",
                inputType: "SELECT",
                answers: [
                    {
                        text: "Усиление влияния США",
                        isRight: false
                    },
                    {
                        text: "Использование ядерного оружия",
                        isRight: true
                    },
                    {
                        text: "Экспанция социализма",
                        isRight: false
                    },
                    {
                        text: "Вооруженный конфликт",
                        isRight: false
                    }
                ]
            },
            {
                title: "В каком году был подписан Договор о запрете использования ядерного оружия?",
                inputType: "TEXT",
                answers: [
                    {
                        text: "1962",
                        isRight: false
                    },
                    {
                        text: "1963",
                        isRight: true
                    },
                    {
                        text: "1965",
                        isRight: false
                    },
                    {
                        text: "1967",
                        isRight: false
                    }
                ]
            },
			{
                title: "Какая часть Берлина принадлежала СССР после окончания Второй мировой войны?",
                inputType: "RADIO",
                answers: [
                    {
                        text: "Северная",
                        isRight: false
                    },
                    {
                        text: "Южная",
                        isRight: false
                    },
                    {
                        text: "Западная",
                        isRight: false
                    },
                    {
                        text: "Восточная",
                        isRight: true
                    }
                ]
            },
			{
                title: "Как назывался кризис между США и СССР, который считается апогеем «холодной войны»?",
                inputType: "SELECT",
                answers: [
                    {
                        text: "Карибский",
                        isRight: false
                    },
                    {
                        text: "Берлинский",
                        isRight: true
                    },
                    {
                        text: "Суэцкий",
                        isRight: false
                    },
                    {
                        text: "Балканский",
                        isRight: false
                    }
                ]
            },
			{
                title: "Кто начал войну в Корее",
                inputType: "TEXT",
                answers: [
                    {
                        text: "США",
                        isRight: true
                    },
                    {
                        text: "СССР",
                        isRight: false
                    },
                    {
                        text: "Великобритания",
                        isRight: false
                    },
                    {
                        text: "Япония",
                        isRight: false
                    }
                ]
            },
			{
                title: " В каком году была окончена «холодная война»?",
                inputType: "RADIO",
                answers: [
                    {
                        text: "1986",
                        isRight: false
                    },
                    {
                        text: "1988",
                        isRight: false
                    },
                    {
                        text: "1991",
                        isRight: true
                    },
                    {
                        text: "1995",
                        isRight: false
                    }
                ]
            },
			{
                title: "Как завали лидера СССР, при котором была завершена конфронтация с Америкой?",
                inputType: "TEXT",
                answers: [
                    {
                        text: "Брежнев",
                        isRight: false
                    },
                    {
                        text: "Андропов",
                        isRight: false
                    },
                    {
                        text: "Горбачеворбачев",
                        isRight: true
                    },
                    {
                        text: "Ельцин",
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
                <div className="container">
                    <Heading topic={this.state.test.topic} />
                    <QuestionField  questionsList={this.state.test.questions}
                                    submit={this.submit.bind(this)}
                     />
                </div>
            )
        } else {
            renderEl = (
                <div className="container"> 
                    <Result rightAnswer={this.state.rightAnswer} 
                            counQuestion={this.state.test.questions.length}
                            unSubmit={this.unSubmit.bind(this)}        
                    />
                </div>
            )
        }
        return (
            renderEl
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
module.hot.accept();