import React from 'react';

class RadioInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null
        }
        this.handleOptionChanged = this.handleOptionChanged.bind(this);
    }
    handleOptionChanged(e) {
        this.setState({
            selectedOption: e.target.value
        })
    }
    render() {
        return (
            <div>
                Select right answer: <br />
                {this.props.answers.map((answer,id) =>
                    <label htmlFor={id}>
                        <input type="radio" value={`option${id}`} name={id} id={id} onChange = {this.handleOptionChanged} checked={this.state.selectedOption === `option${id}`} key={id}/>
                        {answer.text}
                    </label>
                )}
            </div>
        )
    }
}

export default RadioInput;