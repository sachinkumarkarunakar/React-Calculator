import React, {Component} from 'react';
import Display from "./Display"
import Keyboard from "./Keyboard"

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state={
            result:0,
            inputData:'',
            operation: '+'
        }
    }
    getInput(input){
        this.setState({
            inputData: this.state.inputData +''+ input,
            result: eval(this.state.inputData +''+ input)
        })
    }

    getOperation(operator) {
        console.log(operator)
        if(operator =='='){

            this.setState({
                inputData: this.state.result,
           })
        }
        else if(operator =='x'){
            let input = this.state.result%10;
            this.setState({
                result: input,
           })
        }
        else {
             
            this.setState({
                inputData: this.state.inputData + operator,
            })
        }
       
    }

    render(){
        return(
            <div className="container-custom">
            <div className="inner-container">
                <div className="displayBoard">
                    <Display result={this.state.result}  inputData={this.state.inputData}/>
                </div>
                <div >
                    <Keyboard getInput= {this.getInput.bind(this)} getOperation={ this.getOperation.bind(this)}/>
                </div>
            </div>
             </div>
        )
        
    }
};

export default Calculator;