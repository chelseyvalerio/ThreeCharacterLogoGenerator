// logo.js (css will need to link here) reference document.js in miniproject for HTML development (will need to use tempalte literals and require shapes.js, color.js and character.js) -- use contructors and render functions to build appropriate options. These will then be required within index.js file and question prompts will be initiated via inquirer start script 'node index.js'. 
// //      b. build test file



class SVG {
    constructor() {
        this.textEl = ''
        this.shapeEl = ''
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" > ${this.shapeEl} ${this.textEl} </svg>`
    }
    setText(message, color) {
        if (message.length >3) {
            throw new Error ("Must not be more than 3 characters")
        }
        this.textEl = `<text x="150" y="125" font-size ="50" text-anchor="middle" fill="${color}">${message}</text>`
    }
    setShape(shape) {
        this.shapeEl= shape.render()
    }
}


module.exports = SVG 