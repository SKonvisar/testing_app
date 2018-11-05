import React from 'react';

class SelectInput extends React.Component {
    constructor(props){
        super(props);
        let right = this.props.answers.filter((answer) => {
            return answer.isRight;
        })
        this.state = {
            value: this.props.answers[0].text,
            rightAnswer: right[0].text,
            right: false 
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
        this.props.comunicate(null, e.target.value);
        e.target.value == this.state.rightAnswer ? this.setState({right: true}) : this.setState({right: false});
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.right != this.state.right && this.state.right) {
            this.props.comunicate(true,this.state.value);
        } 
    }
    render() {
        console.log(this.state.right);
        return (
            <label htmlFor="12">
                <select name="select" id="12" value={this.state.value} onChange={this.handleChange}>
                    {this.props.answers.map((answer,id) => 
                        <option value={answer.text} key={`option-${id}`}>{answer.text}</option>
                    )}
                </select>
            </label>
        )
    }
}

export default SelectInput;