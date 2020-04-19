import React, {Component} from 'react';

class Display extends Component {
    constructor(props){
        super(props);
    this.state = {
        title:"cal"
    }
}
    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        console.log("component did mount");
        this.setState({
            title:"sam"
        })

    }
    render(){
        console.log("render Method");
        return(
            <div>
                <div>
                    <div className='display'> {this.props.inputData}</div>
                </div>
                <div>
                    <div className='display'> {this.props.result}</div>
                </div>
                {this.state.title}
            </div>
        )
        
    }
};

export default Display;