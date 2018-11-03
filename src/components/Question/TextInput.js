import React from 'react';

class TextInput extends React.Component {
    constructor(props){
        super(props);
        let right = this.props.answers.filter((answer) => {
            return answer.isRight;
        }) 
        this.state = {
            right: right[0].text,
            value: null
        }
    }
    render() {
        console.log(this.props.answers);
        console.log(this.state.right);
        return (
            <label htmlFor={this.props.id}>
                Write right answer: 
                <br />
                <input type="text" id={this.props.id}/>
                <br />
                Answers option:
                <ul>
                    {this.props.answers.map((answer, id) =>
                        <li key={id}>{answer.text}</li>
                    )}               
                </ul>
            </label>
        )
    }
}

export default TextInput;