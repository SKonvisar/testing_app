import React from 'react';
import TextInput from "./TextInput";
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';

class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isRight: false,
            id: this.props.id,
            value: null
        }
    }
    isRight(bool, value){
        if (bool == null) {
            this.setState({
                value: value
            })    
        } else {
            this.setState({
                isRight: bool,
                value: value
            })
        }
    }
    writeArr(id, isRight){
        let arr = [];
        arr.push({id: id, isRight: isRight});
        return arr;
    }
    
    render() {
        let elem;
        switch(this.props.type){
            case "TEXT" :
                elem = <TextInput answers={this.props.answers} comunicate={this.isRight.bind(this)} ref={(node)=> {this.inputNode = node}}/>
                break;
            case "RADIO" :
                elem = <RadioInput answers={this.props.answers} comunicate={this.isRight.bind(this)} ref={(node)=> {this.inputNode = node}}/>
                break;
            case "SELECT" :
                elem = <SelectInput answers={this.props.answers} comunicate={this.isRight.bind(this)} ref={(node)=> {this.inputNode = node}}/>
                break;
            case "CHECKBOX" :
                elem = <CheckboxInput answers={this.props.answers} comunicate={this.isRight.bind(this)} ref={(node)=> {this.inputNode = node}}/>
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