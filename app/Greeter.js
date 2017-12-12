var config = require('./config.json');

module.exports = function(){
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    //greet.textContent = "Hi there, greetings from me ;) ";
    return greet;
};