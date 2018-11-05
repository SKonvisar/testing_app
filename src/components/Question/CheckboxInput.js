import React from 'react';

class CheckboxInput extends React.Component {
    constructor(props){
        super(props);
        let rightAnswers = this.props.answers.map((answer) => {
            if (answer.isRight) {
                return answer.text;
            } else {
                return false;
            }
        }).filter((item) => {
            return item;
        })
        this.arr = [];
        this.state = {
            rights: rightAnswers,
            allChecked: [],
            isChecked: [],
            right: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        console.log(this.arr);
        if (this.arr.some((item) => {return item == e.target.name})){
            this.arr = this.arr.filter((item) => {
                return !(item == e.target.name);    
            })
        } else {
            this.arr.push(e.target.name);
        }
        this.setState({
            isChecked: this.arr
        })
        function compare(a1, a2) {
            return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
        }

        if (compare(this.arr.sort(), this.state.rights.sort())) {
            this.setState({
                right: true
            })
        } else {
            this.setState({
                right: false
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.right != this.state.right && this.state.right) {
            this.props.comunicate(true)
        }
    }
    render() {
        return (
            <div>
                {this.props.answers.map((answer,id) => 
                    <label>
                        <input 
                            type="checkbox" 
                            checked={this.state.isChecked.some((item) => {return item == answer.text})} 
                            name={answer.text} 
                            onChange = {this.handleChange}
                            key={`chekbox-${id}`}    
                        />
                        {answer.text}
                    </label>
                )}
            </div>
        )
    }
}

export default CheckboxInput;