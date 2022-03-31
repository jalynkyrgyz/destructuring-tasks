func (["Иван", "Иванов", "Отдел разработки"]);
function func ([firstName, lastName, department, position = "Джуниор"]) {
    console.log(firstName); // Иван
    console.log(lastName); // Иванов
    console.log(department); // Отдел разработки
    console.log(position); // Джуниор   
};