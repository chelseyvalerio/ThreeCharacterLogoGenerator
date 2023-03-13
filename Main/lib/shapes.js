// -- use contructors and render functions to build appropriate options. These will then be required within index.js file and question prompts will be initiated via inquirer start script 'node index.js'. 
//      b. build test file

class Shapes {
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = color
    }
};    

class Circle extends Shapes{
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }; 
};

class Triangle extends Shapes{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182"
        fill="${this.color}"/>`;
    }; 
};

class Square extends Shapes{
    render() {
        return `<rect x="80" y="40" width="150" height="150" fill="${this.color}"/>`;
    }; 
};

module.exports = { Circle, Triangle, Square };

