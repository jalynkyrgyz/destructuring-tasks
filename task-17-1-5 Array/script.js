let arr = ["Иван", "Иванов", "Отдел разработки"];
let [firstName, lastName, department, position = "Junior"] = arr;
console.log(position);