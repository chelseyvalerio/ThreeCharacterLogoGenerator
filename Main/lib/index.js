const inquirer = require('inquirer');
const SVG = require("./logo");
const { Circle, Triangle, Square } = require('./shapes');
const {writeFile} = require("fs/promises");



// TODO: Create a function to initialize app
class Index {
    run(){
        return inquirer.prompt([
            {
                type:'input' ,
                message:'Please enter THREE characters that you want to display in your logo. Limit is Three Characters' ,
                name:'text' ,
                validate: input => input.length <= 3 || "Only three charaters are allowed, try again",
            },
            {
                type:'input' ,
                message:'What color would you like your text to be?' ,
                name:'textColor' ,
            },
            {
                type:'list' ,
                message:'What shape would you like your logo to be?' ,
                name:'shapeType' ,
                choices: [
                   'circle','triangle','square',
                ]
            },
            {
                type:'input' ,
                message:'What color do you want your logo shape to be?' ,
                name:'shapeColor' ,
            },
        ])
        .then(({text, textColor, shapeType, shapeColor})=> {
            let shape;
            switch(shapeType){
                case "circle":
                    shape = new Circle();
                    break;
                case "triangle":
                    shape = new Triangle();
                    break;
                default: 
                    shape = new Square(); 
                    break;   
            }     
            shape.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile("Main/examples/logo.svg", svg.render());    
        }) 
        .then(()=> {
            console.log('Generated your new logo file');
        })
        .catch((err)=> {
            console.log(err);
        })
    }
}



// Function call to initialize app
module.exports = Index;