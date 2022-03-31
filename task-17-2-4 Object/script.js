let options = {
    width: 400,
    height: 500,
};

let {color: c = "black", width, height} = options;

console.log(c); // black
console.log(width); // 400
console.log(height); // 500