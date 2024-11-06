enum QuestionStatus {
	PUBLISHED = 'published',
	DRAFT = 'draft',
	DELETED	 = 'deleted'
	}


async function getFaqs(req: {
	topicId: number;
	status: QuestionStatus;
}): Promise<{
	question: string;
	answer: string;
	tags: string[];
	likes: number;
	status: QuestionStatus;
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}







/* Запрос
{
	"topicId": 5,
	"status": "published" // "draft", "deleted"
}
//Ответ
[
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
];


async function getFaqs(req) {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
const arr = ['sdf', 1]

function logId(id:string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id);
    } else if (typeof id === 'number') {
        console.log(id);
    }    else {
            console.log(id);
        }
    
}

logId(1)
logId('sdfsdf')
logId(true)

function logErroe (err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObject (obj:{a: number} | {b: number}) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b)
    }
}
*/
