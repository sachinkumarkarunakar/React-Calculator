import React, {Component} from 'react';

class Keyboard extends Component {
    render(){
        return(
            <div>
                <table className="table" >
                    <tbody>
                        <tr>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('1')}>1</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('2')}>2</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('3')}>3</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('4')}>4</button></td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('5')}>5</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('6')}>6</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('7')}>7</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('8')}>8</button></td>
                        </tr>

                        <tr>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('9')}>9</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getInput('0')}>0</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getOperation('+')}>+</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getOperation('-')}>-</button></td>

                        </tr>
                        <tr>
                            <td><button className="btn btn-light" onClick={()=>this.props.getOperation('*')}>*</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getOperation('/')}>/</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getOperation('=')}>=</button></td>
                            <td><button className="btn btn-light" onClick={()=>this.props.getOperation('x')}>x</button></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        )
        
    }
};

export default Keyboard;