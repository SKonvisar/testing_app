import React from 'react';
import Question from '../Question/Question';

class QuestionField extends React.Component {
    constructor(props){
        super(props);
        this.arr = [];
        this.state = {
            reRender: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // getRightAnswers(answerObj, function) {
    //     let obj = {id: id, isRight: isRight};
    //     this.arr.push(obj);
    // }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.arr);
        let rightAnswers = this.arr.filter((item) => {
            return item.state.isRight
        });
        console.log(rightAnswers);
        if (this.arr.some((item)=>{
            if (item.state.value == false) {
                return true;
            } else {
                return false;
            }
        })) {
            alert("Не все заполнены");
            this.props.submit(rightAnswers.length);
        } else {
        this.props.submit(rightAnswers.length);
        }
    }
    
    render() {
        console.log(this.props.questionsList.length);
        console.log(this.state.numOfQuestion);
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
                <input type="submit" value="Send"/>
            </form>
        )
    }
}

export default QuestionField;