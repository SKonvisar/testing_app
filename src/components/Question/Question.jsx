import React from 'react';
import TextInput from "./TextInput/TextInput";
import RadioInput from './RadioInput/RadioInput';
import SelectInput from './SelectInput/SelectInput';
import CheckboxInput from './CheckboxInput/CheckboxInput';

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
                elem = <TextInput   answers={this.props.answers} 
                                    comunicate={this.isRight.bind(this)} 
                                    ref={(node)=> {this.inputNode = node}}
                                    value = {this.state.value}
                        />
                break;
            case "RADIO" :
                elem = <RadioInput  answers={this.props.answers} 
                                    comunicate={this.isRight.bind(this)} 
                                    ref={(node)=> {this.inputNode = node}}
                                    value = {this.state.value}
                        />
                break;
            case "SELECT" :
                elem = <SelectInput answers={this.props.answers} 
                                    comunicate={this.isRight.bind(this)} 
                                    ref={(node)=> {this.inputNode = node}}
                                    value = {this.state.value}            
                        />
                break;
            case "CHECKBOX" :
                elem = <CheckboxInput   answers={this.props.answers} 
                                        comunicate={this.isRight.bind(this)} 
                                        ref={(node)=> {this.inputNode = node}}
                                        value = {this.state.value}                
                        />
                break;
        }
        return (
            <div className="row justify-content-center">
                <label className="col-12 col-md-9">
                    <h3 className="col-12">{this.props.ask}</h3>
                    <div className="col-12">
                    {elem}
                    </div>
                </label>
            </div>
        )
    }
}

export default Question;