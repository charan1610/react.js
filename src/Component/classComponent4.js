import React from 'react';
class Animal extends React.Component{
    componentWillUnmount(){
        alert("----------------i am excued before we are removing the animal from dom-----------");

    }
    render(){
        return<h1>Hello animal,we are my enemy</h1>
    }
}
export default Animal;