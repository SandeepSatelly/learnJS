
 

//Objects

//basic object
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: ()=> {
    console.log('draw');
    }
    };
    
    circle.draw();
    
    //create factory function 
    function createCircle(radius){
        return {
            radius,
            draw() {
            console.log('draw');
            }
        };
    }
    
    const create = createCircle(1);
    console.log(create);
     
    //Constructor function - Better to write in pascal notation OneTwoThree instead of Camel notation oneTwoThree
    
    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
    
    const circle1 = new Circle(2);
    console.log(circle1);
    
    Circle.call = ({}, 1,2, 3); //Here we are using '{}' to call function then passing arguments explicitly
    Circle.apply = ({}, [1,2,3]) // Here we can call all the args at a time in an array
    
    
    
    //Copying an object
    const circle2 = {
        radius: 1,
        location: {
            x:1,
            y:1
        },
        isVisible: true,
        draw: ()=> {
        console.log('draw');
        }
        };
    
        //Method 1 - Using Object Assing
    const another = Object.assign({}, circle2);
    
    console.log(another);
    
    //Method 2 - using Spread OPERATOR '...'
    const another2 = {...circle2};
    console.log(another2);