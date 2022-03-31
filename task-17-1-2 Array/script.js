function func () {
    return ["Иван", "Иванов", "Отдел разработки", "Программист", 2000];
}

let [firstName, lastName, department, position, salary] = func();

console.log(func());