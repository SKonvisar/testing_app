import React from 'react';

class SelectInput extends React.Component {
    constructor(props){
        super(props);
        let right = this.props.answers.filter((answer) => {
            return answer.isRight;
        })
        this.state = {
            value: this.props.answers[0].text,
            right: right[0].text 
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        console.log(this.state.right)
        return (
            <label htmlFor="12">
                <select name="select" id="12" value={this.state.value} onChange={this.handleChange}>
                    {this.props.answers.map((answer) => 
                        <option value={answer.text}>{answer.text}</option>
                    )}
                </select>
            </label>
        )
    }
}

export default SelectInput;