import React from 'react';
import TextInput from "./TextInput";
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';

class Question extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let elem;
        switch(this.props.type){
            case "TEXT" :
                elem = <TextInput answers={this.props.answers}/>
                break;
            case "RADIO" :
                elem = <RadioInput answers={this.props.answers}/>
                break;
            case "SELECT" :
                elem = <SelectInput answers={this.props.answers}/>
                break;
            case "CHECKBOX" :
                elem = <CheckboxInput answers={this.props.answers}/>
                break;
        }
        return (
            <label>
                {this.props.ask}
                {elem}
            </label>
        )
    }
}

export default Question;