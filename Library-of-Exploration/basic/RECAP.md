<html>  
    <body>
        <script>

// VARIABLES
let x = 10;
const y = 33;

x = 20;

// functions

const multiply = (a,b) => {
    return  a*b;

}

function multiply(a,b){
    return a * b;
}

const result = multiply(8,4)

console.log(result);

//Arrays

const arr = [];
const obj = {};

const colors = ['blue', 'green', 'yellow', 'green'];

const polygon = { sides: 5, radius: 120};

console.log(colors[0]);
console.log(polygon.radius);

//  LOOPS

for(let i = 0; i < colors.length; i++){
    console.log(i, colors[i]);
}

colors.forEach((item, i) => {
    console.log(i, item);
})

colors.forEach((item) =>{
    console.log(i);
})

if(true) console.log('yes');
else console.log('nay');


let night = true;
let backgroundColor ;

backgroundColor = (night) ? 'black' : 'white';

//ASYNC


const ice = 'cream';
console.log(ice);//outputs cream

// Generates error as it fetches details before the image is loaded

const loadImage = (url) => {
    const img = new Image();
    img.src = url;
    return img;
};

const myImage = loadImage(url);
console.log(myImage.width, myImage.height);


//Using ASYNC Functions

const loadImage = async (url) => {
    return new Promise((resolve, reject) =>{
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject();
        img.src = url;
    });
};

const start = async () => {
    const myImage = await loadImage();
    console.log(myImage.width, myImage.height);
};


        </script>
    </body>
</html>