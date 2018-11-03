import React from 'react';

class CheckboxInput extends React.Component {
    constructor(props){
        super(props);
        let right = this.props.answers.filter((answer) => {
            return answer.isRight;
        })
        this.state = {
            rights: right,
            allChecked: [],
            isChecked: false
        }
    }
    render() {
        console.log(this.state.rights);
        return (
            <div>
                {this.props.answers.map((answer,id) => 
                    <label htmlFor={id}>
                        <input type="checkbox" checked={this.state.isChecked} name={answer.text} />
                        {answer.text}
                    </label>
                )}
            </div>
        )
    }
}

export default CheckboxInput;