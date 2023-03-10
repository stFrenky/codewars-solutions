//1
// В качестве входных данных вы получите массив с длительностью времени в виде строки
// в следующем формате: ЧЧ: ММ: СС.Каждая продолжительность представляет собой время,
// которое потребовалось Санте, чтобы доставить подарок.Определить,
// сможет ли он сделать это за 24 часа или нет.Если время, необходимое для доставки всех подарков,
// составляет ровно 24 часа, Санта может завершить доставку; -) .
function determineTime(durations) {
	const seconds = durations.reduce((sec, duration) => {

		const [hours, minutes, seconds] = duration.split(':');

		return sec += +hours * 3600 + +minutes * 60 + +seconds;

	}, 0)

	return seconds <= 86400 ? true : false;

}



//2
// Вам дадут слово. Ваша задача — вернуть средний символ слова.
// Если длина слова нечетная, вернуть средний символ. Если длина слова четная,
// верните средние 2 символа.
function getMiddle(s) {
	const arr = s.split('');

	return arr.length % 2 === 0 ? arr[arr.length / 2 - 1] + arr[arr.length / 2] : arr[Math.floor(arr.length / 2)];

}



//3
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке.
//  Все пробелы в строке должны быть сохранены.
function reverseWords(str) {
	return str.split(" ").map(item => item.split("").reverse().join("")).join(" ");
}



//4
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
// Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...
// Пример: ввод = ["Райан", "Киран", "Джейсон", "Юс"], вывод = ["Райан", "Юс"]
function friend(friends) {
	return friends.filter(item => item.length === 4);
}



//5
// В этом небольшом задании вам дается строка чисел, разделенных пробелами,
//  и вы должны вернуть наибольшее и наименьшее число.
function highAndLow(numbers) {
	const arr = numbers.split(' ').sort((a, b) => a - b);

	return `${arr[arr.length - 1]} ${arr[0]}`;

}



