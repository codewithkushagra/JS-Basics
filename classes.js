
class Circle {
    constructor(radius) {
        this.radius = radius;
        let defaultlocation={x:0,y:0};
        let computationOutput=function (factor) {
            console.log(factor);
        }
        this.draw = () => {
            console.log('Draw');
            computationOutput(0.1);       
        
        };

    }
}

const circle= new Circle(1);
circle.draw();
//in JS we can dynamically create properties of an object/class

circle.location={x:1};

//to dynamically access a property use 

let propertyname='location';
circle[propertyname]={x:2};
console.log(circle.location);

//we acn also dynamically delete properties 
delete circle.location;
console.log(circle);

//for iterating through all functions and properties

for(let key in circle){
    //to get specfic type of methods or functions
    if (typeof circle[key] !=='function')
         console.log(circle[key]);
}

//create an array of properties and methods in a class/object
const keys=Object.keys(circle);
console.log(keys);
 
//check if a particular key exist in the class/object
if('radius' in circle)
{
    console.log('radius is: '+circle.radius)
}

