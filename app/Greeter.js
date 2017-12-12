import React, {Component} from 'react'
import config from './config.json'
import styles from '../public/Greeter.css';

class Greeter extends Component{
    render(){
        return (
            <div className={styles.root}>
                {config.greetText}<p>Woooahhh</p>
            </div>
            
        );
    }
}

export default Greeter
/* Step10: refactor this code below
 var config = require('./config.json');

module.exports = function(){
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    //greet.textContent = "Hi there, greetings from me ;) ";
    return greet;
};*/