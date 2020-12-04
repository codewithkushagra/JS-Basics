

//Factory Function
function createcircle(radius){
    return{
        radius,
        draw: function() {
            console.log('DRAW')
        }

    };
}

const circle1= createcircle(1);
circle1.draw();