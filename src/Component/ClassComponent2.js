import React from 'react';
import Animal from './classComponent4';
class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fn: "Charankumar",
            ln: "Damarla",
            technologies: "Html5,Css3,Javascriprt"
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("---------------getDerviedStateFromProps--------", props)
        return { fn: "Manoj"}
    }
    componentDidMount() {
        console.log("---------componentDidMount wii be excuated after rendering-------");
        setTimeout(() => {
            this.setState({ ln: "Repala" });
        }, 5000)
    }
    shouldComponentUpdate() {
        console.log("--------shouldComponentUpdate-----------");
        return true;
    }
    getSnapshotBeforeUpdate(prevtechnologies, nexttechnologies) {
        console.log("------getSnapshotBeforeUpdate------", prevtechnologies);
    }
    
    modifytechnologies = () => {
        this.setState({ technologies: "Nodejs ,MONGODB,Express,React" })
    }
    componentDidUpdate(){
        
    }
    deleteenemy(){
        this.setState(this.state.enemystatus=true);
    }

    render() {
        var frnd;
        if(this.state.enemystatus){
            frnd=<Animal/>
        }
        return (
            <div>
                <h1>{this.state.fn}</h1>
                <h1>hii my name {this.state.ln} {this.state.fn} and learning this technologies {this.state.technologies}</h1>
                {/* <p>and learning this technologies {this.state.technologies}</p> */}
                <button type="button" onClick={this.modifytechnologies}>modify state</button>
            </div>
        )
    }

}
export default ClassComponent;
