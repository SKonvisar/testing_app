import React from 'react';
import "./Radioinput.css";

class RadioInput extends React.Component {
    constructor(props){
        super(props);
        let rightAnswer = this.props.answers.filter((answer) => {
            return answer.isRight;
        })
        this.state = {
            selectedOption: null,
            rightAnswer: rightAnswer[0].text,
            right: false
        }
        this.handleOptionChanged = this.handleOptionChanged.bind(this);
    }
    handleOptionChanged(e) {
        //console.log(e.target.value);
        this.setState({
            selectedOption: e.target.value
        })
        this.props.comunicate(null,e.target.value)
        e.target.value == this.state.rightAnswer ? this.setState({right: true}) : this.setState({right: false});
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.right != this.state.right && this.state.right) {
            this.props.comunicate(true,this.state.selectedOption)
        }
    }
    render() {
        console.log(this.state.right);
        return (
            <div className="radio-input">
                <span>Select right answer:</span> 
                <br />
                {this.props.answers.map((answer,id) =>
                    <label htmlFor={id}>
                        <input  type="radio" 
                                value={answer.text} 
                                name={id} id={id} 
                                onChange = {this.handleOptionChanged} checked={this.state.selectedOption === answer.text} 
                                key={`radio-${id}`}/>
                        {answer.text}
                    </label>
                )}
            </div>
        )
    }
}

export default RadioInput;