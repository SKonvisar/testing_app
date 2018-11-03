import React from 'react';
import Question from '../Question/Question';

class QuestionField extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        console.log(this.props.questionsList);
        return (
            <form>
                {this.props.questionsList.map((question, id) => 
                    <Question ask={question.title} type={question.inputType} answers={question.answers} id={id} key={id}/>
                )}                
            </form>
        )
    }
}

export default QuestionField;