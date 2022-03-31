let arr = ["Иван", "Иванов", "Отдел разработки", "Программист", 2000];
let [firstName, lastName, ... info] = arr;
console.log(info);