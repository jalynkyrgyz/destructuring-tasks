function func ({ color = "red", width, height}) {
    console.log(color); // red
    console.log(width); // 400
    console.log(height); // 500
};
func({ width: 400, height: 500});