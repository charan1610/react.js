import React from 'react';
class ChangeState extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            fn:"charan",
            ln:"Damarla",
            technologies:"Html5,CSS3,Nodejs"
        }
    }
    render(){
        return(
            <div>
                <p>hii {this.state.fn} {this.state.ln}</p>
                <h1>we are learning {this.state.technologies}</h1>
            </div>
        )
    }
}
export default ChangeState;