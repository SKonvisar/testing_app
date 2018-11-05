import React from 'react';

class TextInput extends React.Component {
    constructor(props){
        super(props);
        let right = this.props.answers.filter((answer) => {
            return answer.isRight;
        }) 
        this.state = {
            rightAnswer: right[0].text,
            value: null,
            right: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        e.target.value == this.state.rightAnswer ? this.setState({right: true}) : this.setState({right: false});
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.right != this.state.right && this.state.right) {
            this.props.comunicate(true);
        } 
    }

    render() {
        //console.log(this.props.answers);
        console.log(this.state.right, "input");
        return (
            <label htmlFor={this.props.id}>
                Write right answer: 
                <br />
                <input type="text" id={this.props.id} onBlur={this.handleChange}/>
                <br />
                Answers option:
                <ul>
                    {this.props.answers.map((answer, id) =>
                        <li key={`input-${id}`}>{answer.text}</li>
                    )}               
                </ul>
            </label>
        )
    }
}

export default TextInput;