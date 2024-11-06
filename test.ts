/*let test: {
    officeId: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string;
        address: {
            city: string
        }
    }
} = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}

let revenue = 1000
let bonus = 500

let res1 = revenue + bonus
console.log(res)

function getFullName2(firstname: string, surmame: string): string {
    return `${firstname}  ${surmame}`
}
const getFullName1 = (firstname: string, surmame: string): string => {
    return `${firstname}  ${surmame}`
}

const user = {
    firstname: 'name',
    surmame: 'Фамилия',
    city: 'Veshenskay',
    age: 50
};

function getFullName(userDate: {firstname: string, surmame: string }): string {
    return `${userDate.firstname}  ${userDate.surmame}`
}
console.log(getFullName(user))
const skills1 = ['Dev', 'DevOps', 'Testing'];

//перебираем циклом каждый элемент массива и выводим на консоль
for (const skill1 of skills1) {
    console.log(skill1)
}

//Работать можно в таком виде. Фильтруя, добавляя

const res = skills1
.filter((s:string) => s !== 'DevOps')
.map(s => s+ '! !')
.reduce((a, b) => a+ b);
console.log(res)
const skills: [number, string] = [1,'Dev',];
const skillName = skills[1];
const id = skills[0];

skills.push('gggg');
//Пушнуть можем, но обратиться нет
 const sdf = skills[2]ошибка

skills.pop();
console.log(skills)
const [id, skillName] = skills

const arr: [number, string, ...boolean[]] = [1, 'sdf', true,true, false]*/