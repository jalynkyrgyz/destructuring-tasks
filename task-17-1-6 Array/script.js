function currentDay() {
	return (new Date).getDate();
}
function currentMonth() {
	return (new Date).getMonth();
}
function currentYear() {
	return (new Date).getFullYear();
}


let arr = [2022]
let [year, month = currentMonth(), day = currentDay()] = arr;

console.log(year);
console.log(month);
console.log(day);