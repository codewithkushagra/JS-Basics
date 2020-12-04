
//String primitive
const message='hi';
//in JS if we use . operator with string primitive it automatically binds it with a
//string object
console.log(message);

//String object

let a={
    b:1,
    run(){
        //here this refernces object
        console.log(this);
    }
};
//here this refernces main window
console.log(this);

//Templates
attitude={
    a1:'caring',
    a2:'loving'
};
let string=
`I am Kushagra,

       I live in Agra and I love Isha but she lives in Nagpur.
       She is ${attitude.a1} and ${attitude.a2}`;


