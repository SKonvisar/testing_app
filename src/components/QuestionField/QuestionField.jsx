import React from 'react';
import Question from '../Question/Question';
import './QuestionsField.css';

class QuestionField extends React.Component {
    constructor(props){
        super(props);
        this.arr = [];
        this.state = {
            reRender: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let rightAnswers = this.arr.filter((item) => {
            return item.state.isRight
        });
        if (this.arr.some((item)=>{
            if (item.state.value == false || item.state.value == null) {
                return true;
            } else {
                return false;
            }
        })) {
            if (confirm("Не заполненые поля будут считаться неправильными. Уверены что хотите продолжить ?")) {
                this.props.submit(rightAnswers.length);
            }
            return; 
        } else {
        this.props.submit(rightAnswers.length);
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.questionsList.map((question, id) => 
                    <Question   ask={question.title} 
                                type={question.inputType}
                                answers={question.answers}
                                id={id}
                                key={`question-${id}`}
                                ref = {(node) => {
                                    this.questionNode = node;
                                    this.arr.push(this.questionNode);
                                }}
                    />
                )}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 button">
                        <input  type="submit"
                                value="Send"
                                className="btn btn-success btn-lg"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default QuestionField;